import type {
  ParameterizedContext,
  DefaultState,
  DefaultContext,
  Next,
} from 'koa'

import { apiLogger } from '../../libs/winston'

export function requestLogger() {
  return async (
    ctx: ParameterizedContext<DefaultState, DefaultContext, unknown>,
    next: Next
  ) => {
    const logPayload = {
      req: ctx.request,
      request_start: Date.now(),
      message: `${ctx.req.method} ${ctx.req.url}`,
    }

    let error
    try {
      await next()
    } catch (err) {
      error = err

      // Make sure we aren't double logging exceptions at the centralized error handler
      ctx.state.requestLoggerCaughtError = true
    } finally {
      if (error) {
        apiLogger.log('error', {
          ...logPayload,
          error: error,
        })
      } else {
        apiLogger.log('info', logPayload)
      }
    }

    if (error) {
      ctx.throw(error)
    }
  }
}
