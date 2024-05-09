import EventSource from './common/EventSource'

import { PageCreateEventEntity } from './entities/PageCreateEvent'
import { RecentChangeEventEntity } from './entities/RecentChangeEvent'

const EVENT_ENTITIES = {
  [RecentChangeEventEntity.entityName]: RecentChangeEventEntity,
  [PageCreateEventEntity.entityName]: PageCreateEventEntity,
}

export function init() {
  // Instantiate EventSource (stream) for each entity we are tracking
  for (const key in EVENT_ENTITIES) {
    const eventEntity = EVENT_ENTITIES[key]
    new EventSource(eventEntity)
  }
}
