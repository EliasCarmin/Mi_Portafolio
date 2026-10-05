process.env.VITE_CHAT_API_URL = 'https://ca-api-mmcfhdyruss6c.bluedesert-cd79cd5b.eastus.azurecontainerapps.io'

import { describe, it } from 'node:test'
import assert from 'node:assert'
import {
  normalizeChatMessages,
  getErrorMessage,
  processSSEEvent,
  consumeSSEStream,
  sendChatMessageStream
} from './chatService.js'

describe('Normalización de mensajes para la API', () => {
  it('transforma el rol "bot" a "assistant"', () => {
    const messages = [
      { role: 'bot', content: 'Hola, soy el asistente virtual de Elias.' }
    ]
    const result = normalizeChatMessages(messages, '¿Cuáles son tus proyectos?')

    assert.strictEqual(result.length, 2)
    assert.strictEqual(result[0].role, 'assistant')
    assert.strictEqual(result[0].content, 'Hola, soy el asistente virtual de Elias.')
    assert.strictEqual(result[1].role, 'user')
    assert.strictEqual(result[1].content, '¿Cuáles son tus proyectos?')
  })

  it('elimina mensajes con contenido vacío o espacios en blanco', () => {
    const messages = [
      { role: 'assistant', content: '   ' },
      { role: 'user', content: '' },
      { role: 'assistant', content: 'Mensaje válido previo' },
      { role: 'bot', content: '     \n    ' }
    ]
    const result = normalizeChatMessages(messages, 'Pregunta actual')

    assert.strictEqual(result.length, 2)
    assert.strictEqual(result[0].role, 'assistant')
    assert.strictEqual(result[0].content, 'Mensaje válido previo')
    assert.strictEqual(result[1].role, 'user')
    assert.strictEqual(result[1].content, 'Pregunta actual')
  })

  it('garantiza que el último mensaje tenga role "user"', () => {
    const messages = [
      { role: 'assistant', content: 'Hola' }
    ]
    const result = normalizeChatMessages(messages, 'Hola, quiero contactarte')

    assert.ok(result.length >= 1)
    const lastMessage = result[result.length - 1]
    assert.strictEqual(lastMessage.role, 'user')
    assert.strictEqual(lastMessage.content, 'Hola, quiero contactarte')
  })

  it('filtra mensajes visuales de bienvenida (isWelcome) y mensajes de error (isError)', () => {
    const messages = [
      { role: 'assistant', content: 'Mensaje de bienvenida visual', isWelcome: true },
      { role: 'user', content: 'Pregunta previa' },
      { role: 'assistant', content: 'Ocurrió un error previo', isError: true }
    ]
    const result = normalizeChatMessages(messages, 'Nueva pregunta')

    assert.strictEqual(result.length, 2)
    assert.strictEqual(result[0].role, 'user')
    assert.strictEqual(result[0].content, 'Pregunta previa')
    assert.strictEqual(result[1].role, 'user')
    assert.strictEqual(result[1].content, 'Nueva pregunta')
  })

  it('limita el historial a un máximo de 20 mensajes con el último siendo user', () => {
    const messages = Array.from({ length: 30 }, (_, index) => ({
      role: index % 2 === 0 ? 'user' : 'assistant',
      content: `Mensaje número ${index}`
    }))

    const result = normalizeChatMessages(messages, 'Pregunta final')
    assert.strictEqual(result.length, 20)
    assert.strictEqual(result[19].role, 'user')
    assert.strictEqual(result[19].content, 'Pregunta final')
  })
})

describe('getErrorMessage y ausencia de [object Object]', () => {
  it('devuelve error.message si es una instancia de Error', () => {
    const error = new Error('Conexión perdida con el servidor')
    assert.strictEqual(getErrorMessage(error), 'Conexión perdida con el servidor')
  })

  it('devuelve el string directamente si recibe un string', () => {
    const error = 'Error devuelto directamente como string'
    assert.strictEqual(getErrorMessage(error), 'Error devuelto directamente como string')
  })

  it('devuelve content si recibe un objeto con content', () => {
    const error = { content: 'Contenido del error desde payload' }
    assert.strictEqual(getErrorMessage(error), 'Contenido del error desde payload')
  })

  it('devuelve detail si recibe un objeto con detail string', () => {
    const error = { detail: 'Recurso no encontrado' }
    assert.strictEqual(getErrorMessage(error), 'Recurso no encontrado')
  })

  it('une los campos msg si detail es un array de validación FastAPI', () => {
    const error = {
      detail: [
        { loc: ['body', 'messages'], msg: 'field required', type: 'value_error.missing' },
        { loc: ['body', 'messages', 0, 'content'], msg: 'str type expected', type: 'type_error.str' }
      ]
    }
    const result = getErrorMessage(error)
    assert.strictEqual(result, 'field required. str type expected')
  })

  it('devuelve el mensaje por defecto y nunca [object Object]', () => {
    const fallbackCases = [
      {},
      { foo: 'bar', code: 500 },
      null,
      undefined,
      404,
      true,
      { detail: [] },
      { detail: null },
      { message: '[object Object]' },
      '[object Object]'
    ]

    for (const testCase of fallbackCases) {
      const result = getErrorMessage(testCase)
      assert.notStrictEqual(result, '[object Object]', `Falló para caso: ${JSON.stringify(testCase)}`)
      assert.strictEqual(result, 'No fue posible obtener una respuesta. Inténtalo nuevamente.')
    }
  })
})

describe('Parseo SSE con fragmentos divididos y eventos', () => {
  it('procesa correctamente fragmentos SSE divididos entre múltiples lecturas de stream', async () => {
    const chunks = [
      'data: {"type":"message"',
      ',"content":"Hola, soy "}\n\ndata: {"type":"mes',
      'sage","content":"el asistente de Elias."}\n\n',
      'data: {"type":"stream_end"}\n\n'
    ]

    let readCount = 0
    const mockReader = {
      async read() {
        if (readCount < chunks.length) {
          const chunkStr = chunks[readCount++]
          return { value: new TextEncoder().encode(chunkStr), done: false }
        }
        return { value: undefined, done: true }
      }
    }

    const chunksReceived = []
    let completed = false

    await consumeSSEStream(mockReader, {
      onChunk: (text) => chunksReceived.push(text),
      onComplete: () => { completed = true }
    })

    assert.deepStrictEqual(chunksReceived, ['Hola, soy ', 'el asistente de Elias.'])
    assert.strictEqual(completed, true)
  })

  it('procesa eventos completed_message reemplazando el contenido', () => {
    let completedMessage = ''
    processSSEEvent('data: {"type":"completed_message","content":"Respuesta final completa"}\n', {
      onCompletedMessage: (content) => { completedMessage = content }
    })

    assert.strictEqual(completedMessage, 'Respuesta final completa')
  })

  it('procesa eventos SSE de tipo "error" con payload.content y payload.request_id', () => {
    let capturedError = null
    let capturedPayload = null

    assert.throws(
      () => {
        processSSEEvent(
          'data: {"type":"error","content":"No pude generar la respuesta en este momento.","request_id":"test-uuid-1234"}\n',
          {
            onError: (err, payload) => {
              capturedError = err
              capturedPayload = payload
            }
          }
        )
      },
      (err) => {
        assert.strictEqual(err.message, 'No pude generar la respuesta en este momento.')
        assert.strictEqual(err.requestId, 'test-uuid-1234')
        return true
      }
    )

    assert.strictEqual(capturedError.message, 'No pude generar la respuesta en este momento.')
    assert.strictEqual(capturedPayload.request_id, 'test-uuid-1234')
  })
})

describe('Manejo de HTTP 422 y códigos de error', () => {
  it('lanza mensaje específico para HTTP 422', async () => {
    const originalFetch = globalThis.fetch
    globalThis.fetch = async () => ({
      ok: false,
      status: 422,
      statusText: 'Unprocessable Entity',
      json: async () => ({
        detail: 'El formato de la solicitud no es válido.'
      })
    })

    try {
      await assert.rejects(
        async () => {
          await sendChatMessageStream([], { userInput: 'consulta de prueba' })
        },
        (err) => {
          assert.strictEqual(
            err.message,
            'La conversación contiene un mensaje inválido. Limpia el historial e inténtalo nuevamente.'
          )
          return true
        }
      )
    } finally {
      globalThis.fetch = originalFetch
    }
  })
})
