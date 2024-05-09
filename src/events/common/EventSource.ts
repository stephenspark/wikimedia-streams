import EventSourceInitializer from 'eventsource'

import { eventLogger } from '../../libs/winston'

import Event from '../../models/Event'

import EventEntity from 'events/common/EventEntity'

import type { PageCreateEventMessage } from 'events/entities/PageCreateEvent'
import type { RecentChangeEventMessage } from 'events/entities/RecentChangeEvent'

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
      eventLogger.log('info', `ENTITY ${params.entityName} CONNECTED.`)
      return
    }

    es.onerror = (e) => {
      const data = JSON.parse(e.data)

      eventLogger.log('err', `ENTITY ${params.entityName} ERRORED: ${data}`)
    }

    es.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as MessageEventShape<
        (typeof params)['entityName']
      >
      eventLogger.log('debug', `Message from ENTITY: ${params.entityName}`)
      Event.create({ type: params.entityName, data: data })
    }
  }
}
