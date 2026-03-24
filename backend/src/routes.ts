import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controller/CreateUserController.js";
import { ListUserController } from "./controller/ListUserController.js";
import { DeleteUserController } from "./controller/DeleteUserController.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    // Rotas - GET

    fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true};
    });

    // Criando rota para listar usuários
    fastify.get("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUserController().handle(request, reply);
    })

    // Rotas - POST

    // Criando rota para criação de usuário
    fastify.post("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUserController().handle(request, reply);
    })

    // Rotas - DELETE

    // Criando rota para deletar usuário
    fastify.delete("/users", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUserController().handle(request, reply);
    })

}