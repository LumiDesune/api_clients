import prisma from "../prisma/index.js";

// Service para deletar um usuário
class DeleteUserService {
    async execute(idUser: string) {

        // Validação para verificar se o ID do usuário foi fornecido
        if(!idUser){
            throw new Error("User ID é obrigatório!");
        }

        const findUser = await prisma.user.findUnique({
            where:{
                id: idUser
            }
        }) // Verifificando se o usuário existe

        if (!findUser) {
            throw new Error("Usuário não encontrado!");
        }

        await prisma.user.delete({
            where: {
                id: findUser.id
            }
        })

        return {message: "Usuário deletado com sucesso!"};

    }
}

export { DeleteUserService };