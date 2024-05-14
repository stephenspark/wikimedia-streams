import EventSource from './common/EventSource'

import { PageCreateEventEntity } from './entities/PageCreateEvent'
import { PageDeleteEventEntity } from './entities/PageDeleteEvent'
import { PageLinksChangeEventEntity } from './entities/PageLinksChangeEvent'
import { PageMoveEventEntity } from './entities/PageMoveEvent'
import { PagePropertiesChangeEventEntity } from './entities/PagePropertiesChangeEvent'
import { PageUndeleteEventEntity } from './entities/PageUndeleteEvent'
import { PageRevisionCreateEventEntity } from './entities/PageRevisionCreateEvent'
import { RecentChangeEventEntity } from './entities/RecentChangeEvent'
import EventEntity from './common/EventEntity'

export const EVENT_ENTITIES = [
  PageCreateEventEntity,
  PageDeleteEventEntity,
  PageLinksChangeEventEntity,
  PageMoveEventEntity,
  PagePropertiesChangeEventEntity,
  PageRevisionCreateEventEntity,
  PageUndeleteEventEntity,
  RecentChangeEventEntity,
]

export function init() {
  const EventEntities = {
    entityName: `${EVENT_ENTITIES.map((eventEntity) => eventEntity.entityName).join(',')}`,
    url: `https://stream.wikimedia.org/v2/stream/${EVENT_ENTITIES.map((eventEntity) => eventEntity.entityAlias).join(',')}`,
  } as EventEntity

  return new EventSource(EventEntities)
}
