import EventEntity from '../common/EventEntity'
import EventMessage from '../common/EventMessage'

export interface RecentChangeEventMessage extends EventMessage {
  title: string
  type: string
  bot: boolean
  comment: string
  id: number
  length: {
    new: number
    old: number
  }
  log_action: string
  log_action_comment: string
  log_id: number
  log_params: Array<Record<string, string>>
  log_type: string
  minor: boolean
  namespace: number
  parsedcomment: string
  patrolled: boolean
  revision: {
    new: number
    old: number
  }
  server_name: string
  server_script_path: string
  server_url: string
  timestamp: number
  user: string
  wiki: string
}

export const RecentChangeEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/recentchange',
  entityName: 'RecentChangeEventEntity',
  entityAlias: 'recentchange',
}
