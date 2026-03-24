import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUserService } from "../services/CreateUserService.js";

// Controller para fazer a criação do usuário
class CreateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { name, email } = request.body as { name: string, email: string };
        console.log(`Name: ${name}, Email: ${email}`);

        const userService = new CreateUserService();

        const user = await userService.execute();
        reply.send(user);
    }
}

export { CreateUserController };