import 'newrelic'

import Koa from 'koa'
import cors from '@koa/cors'

import IndexRouter from './api/routes/_index'
import HealthcheckRouter from './api/routes/healthcheck'

import { apiLogger, generalLogger } from './libs/winston'
import { requestLogger } from './api/middlewares/requestLogger'

import * as WikimediaEvents from './events/WikimediaEvents'

// Instantiate event sources
WikimediaEvents.init()

// Instantiate API server
const app = new Koa()
app.use(cors())

// Request logging middleware
app.use(requestLogger())

// Routing
app
  .use(IndexRouter.routes())
  .use(IndexRouter.allowedMethods())
  .use(HealthcheckRouter.routes())
  .use(HealthcheckRouter.allowedMethods())

app.on('error', (err, ctx) => {
  // Request logger middleware sets this flag
  // allows us to catch API errors outside of HTTP reqs while preventing double logging
  if (!ctx.state.requestLoggerCaughtError) {
    apiLogger.log('error', { error: err, context: ctx })
  }
})

app.listen(process.env.PORT || 3000)

// General process error
process.on('uncaughtException', (error) => {
  generalLogger.log('error', { error: error })
})

process.on('unhandledRejection', (reason) => {
  generalLogger.log('error', { error: reason })
})
