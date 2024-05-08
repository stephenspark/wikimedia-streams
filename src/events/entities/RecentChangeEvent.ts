import EventEntity from 'events/common/EventEntity'
import EventMessage from 'events/common/EventMessage'

export interface RecentChangeEventMessage extends EventMessage {
  id: number
  type: string
  namespace: number
  title: string
  title_url: string
  comment: string
  timestamp: number
  user: string
  bot: boolean
  notify_url: string
  server_url: string
  server_name: string
  server_script_path: string
  wiki: string
  parsedcomment: string
}

export const RecentChangeEventEntity: EventEntity = {
  url: 'https://stream.wikimedia.org/v2/stream/recentchange',
  entityName: 'RecentChangeEventEntity',
}
