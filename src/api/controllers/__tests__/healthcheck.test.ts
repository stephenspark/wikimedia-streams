import { createMockContext } from '@shopify/jest-koa-mocks'

import { index } from '../healthcheck'

describe('Healthcheck controller - index function', () => {
  it('successfully returns static body message', () => {
    // Function generates current server time -- mock and freeze
    const currentTimestamp = Date.now()
    const jestSpy = jest
      .spyOn(global.Date, 'now')
      .mockImplementation(() => currentTimestamp)

    const ctx = createMockContext()

    index(ctx)

    expect(ctx.status).toBe(200)
    expect(ctx.body).toStrictEqual({
      data: { message: 'Server is up!', timestamp: Date.now() },
    })

    jestSpy.mockRestore()
  })
})
