const getConfiguredApiUrl = () => {
  return (
    (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CHAT_API_URL) ||
    (typeof process !== 'undefined' && process.env && process.env.VITE_CHAT_API_URL) ||
    ''
  ).trim()
}

export const getChatApiUrl = () => {
  const configuredApiUrl = getConfiguredApiUrl()
  if (configuredApiUrl) {
    return configuredApiUrl.replace(/\/$/, '')
  }

  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
    return 'http://localhost:50505'
  }

  throw new Error('VITE_CHAT_API_URL no está configurada para el entorno de producción.')
}

export const getErrorMessage = (error) => {
  if (!error) {
    return 'No fue posible obtener una respuesta. Inténtalo nuevamente.'
  }

  // 1. Si recibe una instancia de Error, devuelva error.message.
  if (error instanceof Error) {
    if (typeof error.message === 'string' && error.message.trim() && error.message !== '[object Object]') {
      return error.message
    }
    return 'No fue posible obtener una respuesta. Inténtalo nuevamente.'
  }

  // 2. Si recibe un string, lo devuelva.
  if (typeof error === 'string') {
    const trimmed = error.trim()
    if (trimmed && trimmed !== '[object Object]') {
      return error
    }
    return 'No fue posible obtener una respuesta. Inténtalo nuevamente.'
  }

  // Si recibe un objeto
  if (typeof error === 'object') {
    // 3. Si recibe un objeto con content, devuelva content.
    if (typeof error.content === 'string' && error.content.trim() && error.content !== '[object Object]') {
      return error.content
    }

    // 4. Si recibe un objeto con detail string, devuelva detail.
    if (typeof error.detail === 'string' && error.detail.trim() && error.detail !== '[object Object]') {
      return error.detail
    }

    // 5. Si detail es un array de validación FastAPI, una los campos msg.
    if (Array.isArray(error.detail)) {
      const messages = error.detail
        .map((item) => {
          if (typeof item === 'string') return item.trim()
          if (item && typeof item === 'object' && typeof item.msg === 'string') {
            return item.msg.trim()
          }
          return ''
        })
        .filter(Boolean)

      if (messages.length > 0) {
        return messages.join('. ')
      }
    }

    // Array de errores adicional (p.ej. errors devuelto por FastAPI o custom handlers)
    if (Array.isArray(error.errors)) {
      const messages = error.errors
        .map((item) => {
          if (typeof item === 'string') return item.trim()
          if (item && typeof item === 'object' && typeof item.msg === 'string') {
            return item.msg.trim()
          }
          return ''
        })
        .filter(Boolean)

      if (messages.length > 0) {
        return messages.join('. ')
      }
    }

    if (typeof error.message === 'string' && error.message.trim() && error.message !== '[object Object]') {
      return error.message
    }
  }

  // 6. En cualquier otro caso:
  return 'No fue posible obtener una respuesta. Inténtalo nuevamente.'
}

export const normalizeChatMessages = (messages = [], userInput = '') => {
  const trimmedInput = typeof userInput === 'string' ? userInput.trim() : ''

  if (trimmedInput) {
    const apiMessages = (Array.isArray(messages) ? messages : [])
      .filter((message) => message && typeof message.content === 'string' && message.content.trim())
      .filter((message) => !message.isError && !message.isWelcome)
      .map((message) => ({
        role: message.role === 'user' ? 'user' : 'assistant',
        content: message.content.trim()
      }))
      .slice(-19)

    apiMessages.push({
      role: 'user',
      content: trimmedInput
    })

    return apiMessages
  }

  const valid = (Array.isArray(messages) ? messages : [])
    .filter((message) => message && typeof message.content === 'string' && message.content.trim())
    .filter((message) => !message.isError && !message.isWelcome)
    .map((message) => ({
      role: message.role === 'user' ? 'user' : 'assistant',
      content: message.content.trim()
    }))

  if (valid.length === 0) {
    throw new Error('No hay mensajes válidos para enviar.')
  }

  const lastMsg = valid[valid.length - 1]
  if (lastMsg.role !== 'user') {
    throw new Error('El último mensaje debe ser del usuario.')
  }

  const previous = valid.slice(0, -1).slice(-19)
  return [...previous, lastMsg]
}

export const checkHealth = async (signal) => {
  try {
    const response = await fetch(`${getChatApiUrl()}/health`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      signal
    })

    if (!response.ok) {
      return false
    }

    const payload = await response.json()
    return payload?.status === 'ok'
  } catch {
    return false
  }
}

export const processSSEEvent = (eventBlock, callbacks = {}) => {
  if (!eventBlock || typeof eventBlock !== 'string') return false

  const lines = eventBlock.split(/\r?\n/)
  const dataLines = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith(':')) {
      continue
    }
    if (line.startsWith('data:')) {
      let dataContent = line.slice(5)
      if (dataContent.startsWith(' ')) {
        dataContent = dataContent.slice(1)
      }
      dataLines.push(dataContent)
    }
  }

  if (dataLines.length === 0) return false

  const rawData = dataLines.join('\n')
  let payload
  try {
    payload = JSON.parse(rawData)
  } catch (error) {
    console.warn('Se ignoró un evento SSE con JSON inválido:', rawData, error)
    return false
  }

  if (!payload || typeof payload !== 'object') return false

  if (payload.type === 'message' && typeof payload.content === 'string') {
    callbacks.onChunk?.(payload.content)
    return false
  }

  if (payload.type === 'completed_message') {
    callbacks.onCompletedMessage?.(typeof payload.content === 'string' ? payload.content : '')
    return false
  }

  if (payload.type === 'error') {
    if (payload.request_id) {
      console.error(`[Chat API Error] request_id: ${payload.request_id}`, payload)
    } else {
      console.error('[Chat API Error]', payload)
    }

    const errorMessage = getErrorMessage(payload)
    const error = new Error(errorMessage)
    if (payload.request_id) {
      error.requestId = payload.request_id
    }
    callbacks.onError?.(error, payload)
    throw error
  }

  if (payload.type === 'stream_end') {
    callbacks.onComplete?.()
    return true
  }

  return false
}

export const consumeSSEStream = async (reader, callbacks = {}) => {
  const decoder = new TextDecoder('utf-8')
  let buffer = ''
  let streamEnded = false
  let reading = true

  while (reading) {
    const { value, done } = await reader.read()
    if (done) {
      reading = false
    }

    buffer += decoder.decode(value || new Uint8Array(), { stream: !done })

    const events = buffer.split(/\r?\n\r?\n/)
    buffer = events.pop() || ''

    for (const event of events) {
      if (event.trim()) {
        const ended = processSSEEvent(event, callbacks)
        if (ended) streamEnded = true
      }
    }
  }

  if (buffer.trim()) {
    const ended = processSSEEvent(buffer, callbacks)
    if (ended) streamEnded = true
  }

  if (!streamEnded) {
    callbacks.onComplete?.()
  }
}

export const sendChatMessageStream = async (
  messages,
  { userInput, onChunk, onCompletedMessage, onComplete, onError, signal } = {}
) => {
  const apiMessages = normalizeChatMessages(messages, userInput)
  const apiUrl = getChatApiUrl()

  let response
  try {
    response = await fetch(`${apiUrl}/chat`, {
      method: 'POST',
      headers: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages: apiMessages }),
      signal
    })
  } catch (networkError) {
    if (networkError.name === 'AbortError') throw networkError
    const errorMsg = getErrorMessage(networkError)
    const error = new Error(errorMsg)
    onError?.(error)
    throw error
  }

  if (!response.ok) {
    let errorBody = null
    try {
      errorBody = await response.json()
    } catch {
      // Si no es JSON se conserva null
    }

    console.error('Chat API Error Response:', {
      status: response.status,
      statusText: response.statusText,
      body: errorBody
    })

    if (response.status === 422) {
      const error = new Error('La conversación contiene un mensaje inválido. Limpia el historial e inténtalo nuevamente.')
      onError?.(error, errorBody)
      throw error
    }

    const messageText = getErrorMessage(errorBody)
    const error = new Error(messageText)
    onError?.(error, errorBody)
    throw error
  }

  if (!response.body) {
    const error = new Error('El servidor no devolvió un stream legible.')
    onError?.(error)
    throw error
  }

  const reader = response.body.getReader()

  try {
    await consumeSSEStream(reader, {
      onChunk,
      onCompletedMessage,
      onComplete,
      onError
    })
  } catch (streamError) {
    if (streamError.name === 'AbortError') return
    onError?.(streamError)
    throw streamError
  }
}
