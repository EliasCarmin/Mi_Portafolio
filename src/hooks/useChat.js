import { useCallback, useEffect, useRef, useState } from 'react'
import { getErrorMessage, sendChatMessageStream } from '../services/chatService'

export const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: '¡Hola! Soy el asistente virtual de Elias. Puedo contarte sobre su experiencia en cloud, desarrollo de software, APIs, bases de datos y proyectos. ¿Qué te gustaría conocer?',
  isWelcome: true
}

const createMessage = (role, content, extra = {}) => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  role,
  content,
  ...extra
})

export const useChat = () => {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isOpen, setIsOpen] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState(null)
  const [lastUserMessage, setLastUserMessage] = useState('')
  const abortControllerRef = useRef(null)

  useEffect(() => () => abortControllerRef.current?.abort(), [])

  const sendMessage = useCallback(async (content, baseMessages = null) => {
    const trimmedContent = typeof content === 'string' ? content.trim() : ''
    if (!trimmedContent || isStreaming) return

    // 1. Se captura el historial válido antes de crear el placeholder del asistente.
    const sourceMessages = baseMessages ?? messages
    const validHistory = sourceMessages.filter(
      (message) => message && !message.isError && !message.isWelcome && typeof message.content === 'string' && message.content.trim()
    )

    // 2. Se agrega el mensaje del usuario.
    const userMessage = createMessage('user', trimmedContent)

    // 3. Se crea localmente un placeholder vacío para mostrar el streaming.
    const assistantPlaceholder = createMessage('assistant', '')

    const visualHistory = sourceMessages.filter((message) => !message.isError)
    setMessages([...visualHistory, userMessage, assistantPlaceholder])
    setLastUserMessage(trimmedContent)
    setError(null)
    setIsStreaming(true)

    const controller = new AbortController()
    abortControllerRef.current = controller
    let streamedContent = ''

    try {
      // 4. Ese placeholder vacío no se incluye en la solicitud (se pasa validHistory + userInput).
      await sendChatMessageStream(validHistory, {
        userInput: trimmedContent,
        signal: controller.signal,
        // 5. Al recibir fragmentos, se actualiza exclusivamente ese placeholder.
        onChunk: (chunk) => {
          streamedContent += chunk
          setMessages((current) => current.map((message) =>
            message.id === assistantPlaceholder.id
              ? { ...message, content: streamedContent }
              : message
          ))
        },
        onCompletedMessage: (completedContent) => {
          if (!completedContent) return
          streamedContent = completedContent
          setMessages((current) => current.map((message) =>
            message.id === assistantPlaceholder.id
              ? { ...message, content: completedContent }
              : message
          ))
        }
      })
    } catch (streamError) {
      if (streamError.name === 'AbortError') return

      // 6. Si falla, se reemplaza por un mensaje de error legible.
      const readableError = getErrorMessage(streamError)
      setMessages((current) => current.map((message) =>
        message.id === assistantPlaceholder.id
          ? { ...message, content: readableError, isError: true }
          : message
      ))
      setError(readableError)
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null
      }
      setIsStreaming(false)
    }
  }, [isStreaming, messages])

  const clearChat = useCallback(() => {
    abortControllerRef.current?.abort()
    abortControllerRef.current = null
    setMessages([WELCOME_MESSAGE])
    setError(null)
    setLastUserMessage('')
    setIsStreaming(false)
  }, [])

  // 7. Al reintentar, se elimina el mensaje de error anterior antes de reconstruir la solicitud.
  const retryLastMessage = useCallback(() => {
    if (!lastUserMessage || isStreaming) return

    const cleanMessages = messages.filter((message) => !message.isError)
    const lastUserIndex = cleanMessages.findLastIndex?.((message) =>
      message.role === 'user' && message.content === lastUserMessage
    ) ?? -1

    const baseMessages = lastUserIndex >= 0
      ? cleanMessages.slice(0, lastUserIndex)
      : cleanMessages

    setError(null)
    sendMessage(lastUserMessage, baseMessages)
  }, [isStreaming, lastUserMessage, messages, sendMessage])

  const toggleOpen = useCallback(() => setIsOpen((open) => !open), [])
  const closeChat = useCallback(() => setIsOpen(false), [])

  const hasEmptyAssistantPlaceholder = messages.some(
    (message) => message.role === 'assistant' && !message.content && !message.isError
  )

  return {
    messages,
    isOpen,
    isLoading: isStreaming && hasEmptyAssistantPlaceholder,
    isStreaming,
    error,
    sendMessage,
    clearChat,
    retryLastMessage,
    toggleOpen,
    closeChat
  }
}
