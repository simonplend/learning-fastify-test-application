const fastify = require("fastify")({
	logger: true,
});

const routes = require("./routes.js");

fastify.register(routes);

const start = async () => {
	try {
		await fastify.listen(3000);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
