import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controller/CreateUserController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true};
    });

    // Criando rota para criação de usuário
    fastify.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    })

}