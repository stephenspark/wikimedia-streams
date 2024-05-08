/* eslint-disable @typescript-eslint/no-explicit-any */
import EventSourceInitializer from 'eventsource'

import type { PageCreateEventMessage } from 'events/entities/PageCreateEvent'
import type { RecentChangeEventMessage } from 'events/entities/RecentChangeEvent'

import EventEntity from 'events/common/EventEntity'

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
      console.log(`ENTITY ${params.entityName} CONNECTED.`)
      return
    }

    es.onerror = (e) => {
      console.log(`ENTITY ${params.entityName} ERRORED: ${e}`)
    }

    es.onmessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data) as MessageEventShape<
        (typeof params)['entityName']
      >
      console.log(`Message from ENTITY: ${params.entityName}`)
    }
  }
}
