const restify = require('restify');

const server = restify.createServer();
const port = 3003;

server.use(restify.plugins.queryParser());

server.get('/hello/:user', (req, res) => res.send(`Hello ${req.params.user}!`));

server.get('/hello', (req, res) => res.send(`Hello ${req.query.user}!`));

server.listen(port, () => console.log(`Example app listening on port ${server.url}!`));
