import prisma from "../prisma/index.js";

// Interface para os dados do usuario
interface CreateUserProps {
    name: string;
    email: string;
}

// Service para criar um usuário
class CreateUserService {
    async execute({name, email}: CreateUserProps) {
        
        if(!name || !email){
            throw new Error("Name and email are required!");
        }

        const user = await prisma.user.create({
            data: {
                name,
                email,
                status: true
            }
        });

        return user;
    }
}

export { CreateUserService };