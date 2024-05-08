import EventEntity from 'events/common/EventEntity'
import EventMessage from 'events/common/EventMessage'

export interface PageCreateEventMessage extends EventMessage {
  database: string
  dt: string
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
  rev_content_changed: boolean
  rev_content_format: string
  rev_content_model: string
  rev_id: number
  rev_is_revert: boolean
  rev_len: number
  rev_minor_edit: boolean
  rev_parent_id: number
  rev_sha1: string
  rev_slots: {
    main: {
      rev_slot_content_model: string
      rev_slot_origin_rev_id: number
      rev_slot_sha1: string
      rev_slot_size: number
    }
  }
  rev_timestamp: string
}

export const PageCreateEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/page-create',
  entityName: 'PageCreateEventEntity',
}
