import type { ParameterizedContext, DefaultState, DefaultContext } from 'koa'

export function index(
  ctx: ParameterizedContext<DefaultState, DefaultContext, unknown>
) {
  ctx.status = 200
  ctx.body = { data: { message: 'Hello world' } }
}
