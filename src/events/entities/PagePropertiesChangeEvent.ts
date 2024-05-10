import EventEntity from '../common/EventEntity'
import EventMessage from '../common/EventMessage'

export interface PagePropertiesChangeEventMessage extends EventMessage {
  added_properties: Record<string, string>
  database: string
  page_id: number
  page_is_redirect: boolean
  page_namespace: number
  page_title: string
  performer: {
    user_edit_count: number
    user_groups: Array<string>
    user_id: number
    user_is_bot: boolean
    user_registration_dt: string
    user_text: string
  }
  removed_properties: Record<string, string>
  rev_id: number
}

export const PagePropertiesChangeEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/page-properties-change',
  entityName: 'PagePropertiesChangeEventEntity',
  entityAlias: 'page-properties-change',
}
