import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserService } from "../services/DeleteUserService.js";

// Controller para deletar um usuário
class DeleteUserController {
    async handle(request: FastifyRequest, reply: FastifyReply){
       const { id } = request.params as { id: string };

       const deleteUserService = new DeleteUserService();
       const user = await deleteUserService.execute(id);
       
       reply.send(user);
    }
}

export { DeleteUserController }