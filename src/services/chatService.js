const configuredApiUrl = import.meta.env.VITE_CHAT_API_URL?.trim()
const API_URL = (configuredApiUrl || (import.meta.env.DEV ? 'http://localhost:50505' : '')).replace(/\/$/, '')

const requireApiUrl = () => {
  if (!API_URL) {
    throw new Error('El asistente no está configurado en este entorno.')
  }

  return API_URL
}

const getErrorMessage = async (response) => {
  try {
    const payload = await response.json()
    return payload.detail || payload.message || `Error HTTP ${response.status}`
  } catch {
    return `Error HTTP ${response.status}`
  }
}

export const checkHealth = async (signal) => {
  const response = await fetch(`${requireApiUrl()}/health`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal
  })

  if (!response.ok) {
    throw new Error(await getErrorMessage(response))
  }

  const payload = await response.json()
  return payload.status === 'ok'
}

const processEvent = (eventBlock, callbacks) => {
  const data = eventBlock
    .split(/\r?\n/)
    .filter((line) => line.startsWith('data:'))
    .map((line) => line.slice(5).trimStart())
    .join('\n')

  if (!data) return false

  try {
    const payload = JSON.parse(data)

    if (payload.type === 'message' && payload.content) {
      callbacks.onChunk?.(payload.content)
    } else if (payload.type === 'completed_message') {
      callbacks.onCompletedMessage?.(payload.content || '')
    } else if (payload.type === 'stream_end') {
      callbacks.onComplete?.()
      return true
    }
  } catch (error) {
    console.warn('Se ignoró un evento SSE inválido:', error)
  }

  return false
}

export const sendChatMessageStream = async (
  messages,
  { onChunk, onCompletedMessage, onComplete, onError, signal } = {}
) => {
  let streamEnded = false

  try {
    const response = await fetch(`${requireApiUrl()}/chat`, {
      method: 'POST',
      headers: {
        Accept: 'text/event-stream',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: messages.map(({ role, content }) => ({ role, content }))
      }),
      signal
    })

    if (!response.ok) {
      throw new Error(await getErrorMessage(response))
    }

    if (!response.body) {
      throw new Error('El servidor no devolvió un stream legible.')
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder('utf-8')
    let buffer = ''

    while (true) {
      const { value, done } = await reader.read()
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done })

      const events = buffer.split(/\r?\n\r?\n/)
      buffer = events.pop() || ''

      for (const event of events) {
        streamEnded = processEvent(event, { onChunk, onCompletedMessage, onComplete }) || streamEnded
      }

      if (done) break
    }

    if (buffer.trim()) {
      streamEnded = processEvent(buffer, { onChunk, onCompletedMessage, onComplete }) || streamEnded
    }

    if (!streamEnded) onComplete?.()
  } catch (error) {
    if (error.name === 'AbortError') return
    onError?.(error)
    throw error
  }
}
