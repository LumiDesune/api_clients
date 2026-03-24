import prisma from "../prisma/index.js";

// Service para criar um usuário
class CreateUserService {
    async execute() {
        console.log("Testing create user service...");

        return { ok: true };
    }
}

export { CreateUserService };