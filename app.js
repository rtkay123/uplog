import Fastify from 'fastify'
import multipart from '@fastify/multipart'

export const app = Fastify({
  logger: true
})

app.register(multipart)

app.post('/upload', async function(req, reply) {
  req.log.info(req.headers)
  const cefileparts = req.file();
})
