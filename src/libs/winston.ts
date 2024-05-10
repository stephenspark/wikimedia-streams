import winston from 'winston'

export const eventLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'event-service' },
  transports: [new winston.transports.Console()],
})

export const apiLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'api-service' },
  transports: [new winston.transports.Console()],
})

export const generalLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'general-service' },
  transports: [new winston.transports.Console()],
})
