import type { ParameterizedContext, DefaultState, DefaultContext } from 'koa'

export function index(
  ctx: ParameterizedContext<DefaultState, DefaultContext, unknown>
) {
  ctx.status = 200
  ctx.body = { data: { message: 'Server is up!', timestamp: Date.now() } }
}
