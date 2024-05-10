import Router from '@koa/router'

const router = new Router()

router.get('/', (ctx) => {
  ctx.status = 200
  ctx.body = { message: 'Hello world' }
})

export default router
