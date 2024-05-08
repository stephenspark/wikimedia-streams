import EventSource from './common/EventSource'

import { PageCreateEventEntity } from './entities/PageCreateEvent'
import { RecentChangeEventEntity } from './entities/RecentChangeEvent'

export default class WikimediaEvents {
  private static EVENT_ENTITIES = {
    [RecentChangeEventEntity.entityName]: RecentChangeEventEntity,
    [PageCreateEventEntity.entityName]: PageCreateEventEntity,
  }

  public static init() {
    for (const key in this.EVENT_ENTITIES) {
      const eventEntity = this.EVENT_ENTITIES[key]
      new EventSource(eventEntity)
    }
  }
}
