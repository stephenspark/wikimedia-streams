import EventSourceInitializer from 'eventsource'

import { eventLogger } from '../../libs/winston'

import Event from '../../models/Event'

import EventEntity from '../common/EventEntity'

export default class EventSource {
  private es: EventSourceInitializer | null = null
  private reconnectDelay = 1000 // 1 seconds
  private maxReconnectDelay = 60000 // 1 minute

  public constructor(params: EventEntity) {
    this.init(params)
  }

  private init(params: EventEntity) {
    this.es = new EventSourceInitializer(params.url)

    this.es.onopen = () => {
      eventLogger.log('info', {
        message: `ENTITIES ${params.entityName} CONNECTED.`,
      })
    }

    this.es.onerror = (event: MessageEvent) => {
      eventLogger.log('error', {
        message: `EVENTSOURCE ERRORED`,
        error: event,
      })

      this.reconnect(params)
    }

    this.es.onmessage = async (event: MessageEvent) => {
      const data = JSON.parse(event.data)

      eventLogger.log('debug', {
        message: `ENTITY ${params.entityName} VERBOSE DATA`,
        data: data,
      })

      // console.log(data)
      await Event.create({ type: params.entityName, data: data })
    }
  }

  private reconnect(params: EventEntity) {
    if (this.es) {
      this.es.close()
      setTimeout(() => {
        // Exponenantial backoff
        this.init(params)
        this.reconnectDelay = Math.min(
          this.reconnectDelay * 2,
          this.maxReconnectDelay
        )
      }, this.reconnectDelay)
    }
  }
}
