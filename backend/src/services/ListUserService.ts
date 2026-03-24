import prisma from "../prisma/index.js";

// Service para listar usuários
class ListUserService {
    async execute() {

        const users = await prisma.user.findMany();

        return users;
    }
}

export { ListUserService };