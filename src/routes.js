const utility = require("./utility.js");

module.exports = async function routes(fastify, options) {
	fastify.register(utility);

	fastify.get("/", async function (request, reply) {
		return { hello: `world!!! ${this.utility()}` };
	});
};
