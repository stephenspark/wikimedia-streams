import Router from '@koa/router'

import { index } from '../controllers/_index'

const router = new Router()

router.get('/', index)

export default router
