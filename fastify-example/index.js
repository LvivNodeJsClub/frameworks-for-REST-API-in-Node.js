const Fastify = require('fastify');

const fastify = Fastify();
const port = 3005;

fastify.get('/hello/:user', (req, res) => res.send(`Hello ${req.params.user}!`));

fastify.get('/hello', (req, res) => res.send(`Hello ${req.query.user}!`));

fastify.listen(port, () => console.log(`Example app listening on port ${fastify.server.address().port}!`));
