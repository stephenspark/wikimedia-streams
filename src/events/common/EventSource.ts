import EventSourceInitializer from 'eventsource'

import { eventLogger } from '../../libs/winston'

import Event from '../../models/Event'

import EventEntity from '../common/EventEntity'

import type { PageCreateEventMessage } from '../entities/PageCreateEvent'
import type { RecentChangeEventMessage } from '../entities/RecentChangeEvent'

type MessageEventShape<EntityName> =
  EntityName extends 'RecentChangeEventEntity'
    ? RecentChangeEventMessage
    : EntityName extends 'PageCreateEventEntity'
      ? PageCreateEventMessage
      : never

export default class EventSource {
  public constructor(params: EventEntity) {
    this.init(params)
  }

  private init(params: EventEntity) {
    const es = new EventSourceInitializer(params.url)

    es.onopen = () => {
      eventLogger.log('info', {
        message: `ENTITY ${params.entityName} CONNECTED.`,
      })
    }

    es.onerror = (event: MessageEvent) => {
      eventLogger.log('error', {
        message: `ENTITY ${params.entityName} ERRORED`,
        error: event,
      })
    }

    es.onmessage = async (event: MessageEvent) => {
      const data = JSON.parse(event.data) as MessageEventShape<
        (typeof params)['entityName']
      >
      eventLogger.log('debug', {
        message: `ENTITY ${params.entityName} VERBOSE DATA`,
        data: data,
      })
      await Event.create({ type: params.entityName, data: data })
    }
  }
}
