import EventEntity from '../common/EventEntity'
import EventMessage from '../common/EventMessage'

export interface PageUndeleteEventMessage extends EventMessage {
  comment: string
  database: string
  page_id: number
  page_is_redirect: boolean
  page_namespace: number
  page_title: string
  parsedcomment: string
  performer: {
    user_edit_count: number
    user_groups: Array<string>
    user_id: number
    user_is_bot: boolean
    user_registration_dt: string
    user_text: string
  }
  prior_state: {
    page_id: number
  }
  removed_properties: Record<string, string>
  rev_id: number
}

export const PageUndeleteEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/page-undelete',
  entityName: 'PageUndeleteEventEntity',
  entityAlias: 'page-undelete',
}
