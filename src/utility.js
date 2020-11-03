const fastifyPlugin = require("fastify-plugin");

async function utility(fastify, options) {
	fastify.decorate("utility", function () {
		return "Decorators are super neat";
	});
}

module.exports = fastifyPlugin(utility);
