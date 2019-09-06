const Hapi   = require('@hapi/hapi');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 3002
});

// Add the route
server.route({
    method:  'GET',
    path:    '/hello/{user}',
    handler: function(request) {
        return `Hello ${request.params.user}!`;
    }
});
server.route({
    method:  'GET',
    path:    '/hello',
    handler: function(request) {
        return `Hello ${request.query.user}!`;
    }
});

// Start the server
const start = async function() {
    await server.start();
    console.log(`Example app listening on port ${server.info.port}!`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

start();
