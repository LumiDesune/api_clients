import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controller/CreateUserController.js";
import { ListUserController } from "./controller/ListUserController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true};
    });

    // Criando rota para listar usuários
    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply);
    })

    // Criando rota para criação de usuário
    fastify.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    })

}