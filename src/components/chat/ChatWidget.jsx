import React, { useEffect, useRef, useState } from 'react'
import {
  Bot,
  MessageSquare,
  RefreshCw,
  RotateCcw,
  Send,
  X
} from 'lucide-react'
import { useChat } from '../../hooks/useChat'
import { checkHealth, getErrorMessage } from '../../services/chatService'
import ChatMessageItem from './ChatMessageItem'

const QUICK_PROMPTS = [
  'Experiencia en Google Cloud',
  'Proyectos de software',
  'Bases de datos y APIs',
  'Cómo contactar a Elias'
]

const ChatWidget = () => {
  const {
    messages,
    isOpen,
    isLoading,
    isStreaming,
    error,
    sendMessage,
    clearChat,
    retryLastMessage,
    toggleOpen,
    closeChat
  } = useChat()
  const [input, setInput] = useState('')
  const [isOnline, setIsOnline] = useState(null)
  const messagesEndRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    let activeController
    let isMounted = true

    const updateHealth = async () => {
      activeController?.abort()
      const controller = new AbortController()
      activeController = controller
      const timeoutId = window.setTimeout(() => controller.abort(), 5000)

      try {
        const online = await checkHealth(controller.signal)
        if (isMounted) setIsOnline(online)
      } catch {
        if (isMounted) setIsOnline(false)
      } finally {
        window.clearTimeout(timeoutId)
      }
    }

    updateHealth()
    const intervalId = window.setInterval(updateHealth, 60000)

    return () => {
      isMounted = false
      activeController?.abort()
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [isOpen, messages, isLoading])

  useEffect(() => {
    if (isOpen) window.setTimeout(() => textareaRef.current?.focus(), 150)
  }, [isOpen])

  const handleSubmit = (event) => {
    event?.preventDefault()
    const message = input.trim()
    if (!message || isStreaming) return
    setInput('')
    sendMessage(message)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }

  const hasConversation = messages.some((message) => message.role === 'user')

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          role="dialog"
          aria-label="Chat con el asistente de Elias"
          className="fixed inset-x-3 bottom-20 top-3 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-data-dark/95 text-white shadow-2xl shadow-black/50 backdrop-blur-xl sm:absolute sm:inset-auto sm:bottom-16 sm:right-0 sm:h-[540px] sm:w-[380px] animate-fade-in"
        >
          <header className="flex shrink-0 items-center gap-3 border-b border-white/10 bg-gradient-to-r from-data-green/15 to-transparent px-4 py-3.5">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-data-green/15 text-data-green ring-1 ring-data-green/30">
              <Bot size={22} aria-hidden="true" />
              <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-data-dark ${isOnline ? 'bg-data-green animate-pulse' : isOnline === false ? 'bg-amber-400' : 'bg-gray-500'}`} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="truncate font-semibold">Asistente de Elias</h2>
              <p className="text-xs text-gray-400">
                {isOnline ? 'Online · Listo para ayudarte' : isOnline === false ? 'Offline · Intenta más tarde' : 'Comprobando conexión...'}
              </p>
            </div>
            <button
              type="button"
              onClick={clearChat}
              disabled={!hasConversation && !error}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-data-green disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Limpiar conversación"
              title="Limpiar conversación"
            >
              <RotateCcw size={18} />
            </button>
            <button
              type="button"
              onClick={closeChat}
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Cerrar chat"
            >
              <X size={19} />
            </button>
          </header>

          <div className="custom-scrollbar flex-1 space-y-4 overflow-y-auto px-4 py-4" aria-live="polite">
            {messages.map((message) => (
              message.content ? <ChatMessageItem key={message.id} message={message} /> : null
            ))}

            {!hasConversation && (
              <div className="grid grid-cols-1 gap-2 pt-1 min-[360px]:grid-cols-2">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    disabled={isStreaming}
                    className="rounded-xl border border-data-green/20 bg-data-green/5 px-3 py-2.5 text-left text-xs text-gray-200 transition hover:border-data-green/50 hover:bg-data-green/10 disabled:opacity-50"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex items-end gap-2" aria-label="El asistente está escribiendo">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-data-green/30 bg-data-green/10 text-data-green">
                  <Bot size={15} />
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/10 px-4 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span key={dot} className="h-1.5 w-1.5 animate-bounce rounded-full bg-data-green" style={{ animationDelay: `${dot * 140}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-100">
                <p>{getErrorMessage(error)}</p>
                <button
                  type="button"
                  onClick={retryLastMessage}
                  disabled={isStreaming}
                  className="mt-2 inline-flex items-center gap-1.5 font-medium text-data-green hover:text-neon-green disabled:opacity-50"
                >
                  <RefreshCw size={14} /> Reintentar
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="shrink-0 border-t border-white/10 bg-data-gray/90 p-3">
            <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-data-dark px-3 py-2 transition focus-within:border-data-green/60 focus-within:ring-1 focus-within:ring-data-green/20">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={2000}
                disabled={isStreaming}
                placeholder={isStreaming ? 'Esperando la respuesta...' : 'Escribe tu consulta...'}
                className="custom-scrollbar max-h-24 min-h-[40px] flex-1 resize-none bg-transparent py-2 text-sm text-white outline-none placeholder:text-gray-500 disabled:cursor-not-allowed"
                aria-label="Escribe tu consulta"
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-data-green text-data-dark transition hover:bg-neon-green disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-500"
                aria-label="Enviar mensaje"
              >
                <Send size={17} />
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-gray-500">Enter para enviar · Shift + Enter para nueva línea</p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={toggleOpen}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-data-green to-neon-green text-data-dark shadow-lg shadow-data-green/20 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-data-green/30"
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat con el asistente de Elias'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={25} /> : <MessageSquare size={25} />}
        {!isOpen && isOnline && <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-data-dark bg-data-green" />}
      </button>
    </div>
  )
}

export default ChatWidget
