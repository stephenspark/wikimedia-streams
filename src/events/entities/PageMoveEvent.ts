import EventEntity from '../common/EventEntity'
import EventMessage from '../common/EventMessage'

export interface PageMoveEventMessage extends EventMessage {
  comment: string
  database: string
  new_redirect_page: {
    page_id: number
    page_namespace: number
    page_title: string
    rev_id: number
  }
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
    page_namespace: number
    page_title: string
    rev_id: number
  }
  rev_id: number
}

export const PageMoveEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/page-move',
  entityName: 'PageMoveEventEntity',
  entityAlias: 'page-move',
}
