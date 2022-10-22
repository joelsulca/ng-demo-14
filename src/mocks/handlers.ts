import { rest } from 'msw'

export const handlers = [
  rest.post('/auth/local', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        user: {
          id: 1,
          username: 'demo',
          email: 'joeldemo@gmail.com',
          provider: '',
          confirmed: true,
          blocked: false,
          created_at: new Date(),
          updated_at: new Date()
        }
      })
    )
  }),

  rest.get('/clients', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json([])
    )
  }),

  rest.post('/clients', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(req.body)
    )
  }),

  rest.patch('/clients', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(req.body)
    )
  }),

  rest.delete('/clients/:id', (req, res, ctx) => {
    return res(
      ctx.status(200)
    )
  }),
]