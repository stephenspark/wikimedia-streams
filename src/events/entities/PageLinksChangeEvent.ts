import EventEntity from '../common/EventEntity'
import EventMessage from '../common/EventMessage'

export interface PageLinksChangeEventMessage extends EventMessage {
  added_links: Array<string>
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
  removed_links: Array<string>
  rev_id: number
}

export const PageLinksChangeEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/page-links-change',
  entityName: 'PageLinksChangeEventEntity',
  entityAlias: 'page-links-change',
}
