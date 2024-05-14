import app from '../index'
import request from 'supertest'

describe('Koa API Server', () => {
  const server = app.listen(process.env.PORT || 8888)

  afterAll(() => server.close())

  it('starts successfully', () => {
    request(server)
  })

  it('successfully calls index GET route', async () => {
    const response = await request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(response.body).toEqual({ data: { message: 'Hello world' } })
  })

  it('successfully calls healthcheck GET route', async () => {
    const response = await request(server)
      .get('/healthcheck')
      .set('Accept', 'application/json')
      .expect(200)

    expect(response.body.data.message).toEqual('Server is up!')
  })

  it('returns 404 for non-existent route', async () => {
    const response = await request(server)
      .get('/non-existent-route')
      .set('Accept', 'application/json')
      .expect(404)

    expect(response.text).toEqual('Not Found')
  })

  it('returns 405 for unsupported method', async () => {
    const response = await request(server)
      .post('/')
      .set('Accept', 'application/json')
      .expect(405)

    expect(response.text).toEqual('Method Not Allowed')
  })
})
