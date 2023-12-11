import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// called as http://localhost:3000/abc/../foobar
fastify.all('/abc*', async function handler (request, reply) {
  const targetUrl = new URL(`https://abc.com${request.raw.url}`);

  fastify.log.info(targetUrl); // will be 'https://abc.com/foobar'

  return { hello: 'world' }
});

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
