import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserService } from "../services/ListUserService.js";

// Controller para listar usuários
class ListUserController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const userService = new ListUserService();
        const users = await userService.execute();
        reply.send(users);
    }
}

export { ListUserController };