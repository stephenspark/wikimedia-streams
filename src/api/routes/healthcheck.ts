import Router from '@koa/router'

import { index } from '../controllers/healthcheck'

const router = new Router({ prefix: '/healthcheck' })

router.get('/', index)

export default router
