import Router from '@koa/router'

const router = new Router({ prefix: '/healthcheck' })

router.get('/', (ctx) => {
  ctx.status = 200
  ctx.body = { message: 'Server is up!', timestamp: Date.now() }
})

export default router
