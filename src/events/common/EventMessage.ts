export default interface EventMessage {
  $schema: string
  meta: {
    uri: string
    request_id: string
    id: string
    dt: string
    domain: string
    stream: string
    topic: string
    partition: number
    offset: number
  }
}
