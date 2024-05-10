import EventEntity from '../common/EventEntity'
import EventMessage from '../common/EventMessage'

export interface PageRevisionCreateEventMessage extends EventMessage {
  comment: string
  database: string
  dt: string
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
  rev_content_changed: boolean
  rev_content_format: string
  rev_content_model: string
  rev_id: number
  rev_is_revert: boolean
  rev_len: number
  rev_minor_edit: boolean
  rev_parent_id: number
  rev_revert_details: {
    rev_is_exact_revert: boolean
    rev_original_rev_id: number
    rev_revert_method: Array<string>
    rev_reverted_revs: Array<number>
  }
  rev_sha1: string
  rev_slots: Record<string, object> // Slots need to be exported
  rev_timestamp: string
}

export const PageRevisionCreateEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/revision-create',
  entityName: 'PageRevisionCreateEventEntity',
  entityAlias: 'revision-create',
}
