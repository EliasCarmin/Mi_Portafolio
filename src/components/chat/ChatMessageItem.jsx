import { Bot } from 'lucide-react'
import { getErrorMessage } from '../../services/chatService'

const URL_PATTERN = /(https?:\/\/[^\s]+)/g

const renderContent = (rawContent) => {
  const content = typeof rawContent === 'string' ? rawContent : getErrorMessage(rawContent)

  return content.split(URL_PATTERN).map((part, index) => {
    if (!part.match(URL_PATTERN)) return part

    return (
      <a
        key={`${part}-${index}`}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium underline decoration-current/50 underline-offset-2 hover:opacity-80"
      >
        {part}
      </a>
    )
  })
}

const ChatMessageItem = ({ message }) => {
  const isUser = message?.role === 'user'
  const isError = Boolean(message?.isError)

  return (
    <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div
          className={`mb-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
            isError
              ? 'border-red-400/30 bg-red-400/10 text-red-400'
              : 'border-data-green/30 bg-data-green/10 text-data-green'
          }`}
        >
          <Bot size={15} aria-hidden="true" />
        </div>
      )}

      <div
        className={`max-w-[82%] whitespace-pre-wrap break-words px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
          isUser
            ? 'rounded-2xl rounded-br-md bg-gradient-to-br from-data-green to-neon-green text-data-dark'
            : isError
              ? 'rounded-2xl rounded-bl-md border border-red-400/30 bg-red-400/10 text-red-200'
              : 'rounded-2xl rounded-bl-md border border-white/10 bg-white/10 text-gray-100'
        }`}
      >
        {renderContent(message?.content)}
      </div>
    </div>
  )
}

export default ChatMessageItem
