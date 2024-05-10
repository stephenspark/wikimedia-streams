import 'newrelic'

import WikimediaEvents from './events'
import app from './api'

import { generalLogger } from './libs/winston'

// Start events
WikimediaEvents.init()

// Start app server
app.listen(process.env.PORT || 3000)

// General process error
process.on('uncaughtException', (error) => {
  generalLogger.log('error', { error: error })
})

process.on('unhandledRejection', (reason) => {
  generalLogger.log('error', { error: reason })
})
