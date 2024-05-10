import { createMockContext } from '@shopify/jest-koa-mocks'

import { index } from '../_index'

describe('Index Controller - index function', () => {
  it('successfully returns static body message', () => {
    const ctx = createMockContext()

    index(ctx)

    expect(ctx.status).toBe(200)
    expect(ctx.body).toStrictEqual({ data: { message: 'Hello world' } })
  })
})
