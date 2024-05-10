import Koa from 'koa'
import cors from '@koa/cors'

import IndexRouter from './routes/_index'
import HealthcheckRouter from './routes/healthcheck'

import { apiLogger } from '../libs/winston'
import { requestLogger } from './middlewares/requestLogger'

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

export default app
