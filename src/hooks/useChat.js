import { useCallback, useEffect, useRef, useState } from 'react'
import { sendChatMessageStream } from '../services/chatService'

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content: '¡Hola! Soy el asistente virtual de Elias. Puedo contarte sobre su experiencia en cloud, desarrollo de software, APIs, bases de datos y proyectos. ¿Qué te gustaría conocer?'
}

const createMessage = (role, content) => ({
  id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  role,
  content
})

export const useChat = () => {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isOpen, setIsOpen] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState(null)
  const [lastUserMessage, setLastUserMessage] = useState('')
  const abortControllerRef = useRef(null)

  useEffect(() => () => abortControllerRef.current?.abort(), [])

  const sendMessage = useCallback(async (content, baseMessages = messages) => {
    const trimmedContent = content.trim()
    if (!trimmedContent || isStreaming) return

    const userMessage = createMessage('user', trimmedContent)
    const assistantMessage = createMessage('assistant', '')
    const conversation = [...baseMessages, userMessage]

    setMessages([...conversation, assistantMessage])
    setLastUserMessage(trimmedContent)
    setError(null)
    setIsStreaming(true)

    const controller = new AbortController()
    abortControllerRef.current = controller
    let streamedContent = ''

    try {
      await sendChatMessageStream(conversation, {
        signal: controller.signal,
        onChunk: (chunk) => {
          streamedContent += chunk
          setMessages((current) => current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: streamedContent }
              : message
          ))
        },
        onCompletedMessage: (completedContent) => {
          if (!completedContent) return
          streamedContent = completedContent
          setMessages((current) => current.map((message) =>
            message.id === assistantMessage.id
              ? { ...message, content: completedContent }
              : message
          ))
        }
      })
    } catch (streamError) {
      setMessages((current) => current.filter((message) =>
        message.id !== assistantMessage.id || message.content
      ))
      setError(streamError.message || 'No fue posible conectar con el asistente.')
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

  const retryLastMessage = useCallback(() => {
    if (!lastUserMessage || isStreaming) return

    const lastUserIndex = messages.findLastIndex?.((message) =>
      message.role === 'user' && message.content === lastUserMessage
    ) ?? -1
    const baseMessages = lastUserIndex >= 0 ? messages.slice(0, lastUserIndex) : messages

    setMessages(baseMessages)
    setError(null)
    sendMessage(lastUserMessage, baseMessages)
  }, [isStreaming, lastUserMessage, messages, sendMessage])

  const toggleOpen = useCallback(() => setIsOpen((open) => !open), [])
  const closeChat = useCallback(() => setIsOpen(false), [])

  return {
    messages,
    isOpen,
    isLoading: isStreaming && messages.at(-1)?.content === '',
    isStreaming,
    error,
    sendMessage,
    clearChat,
    retryLastMessage,
    toggleOpen,
    closeChat
  }
}
