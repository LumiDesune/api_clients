import prisma from "../prisma/index.js";

// Interface para os dados do usuario
interface CreateUserProps {
    name: string;
    email: string;
}

// Service para criar um usuário
class CreateUserService {
    // Validar formato do email (padrão RFC simplificado)
    private validateEmailFormat(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    async execute({name, email}: CreateUserProps) {
        
        if(!name || !email){
            throw new Error("Name and email are required!");
        }

        // Validar formato do email
        if(!this.validateEmailFormat(email)){
            throw new Error("Invalid email format!");
        }

        // Verificar se o email já existe no banco de dados
        const existingUser = await prisma.user.findFirst({
            where: { email }
        });

        if(existingUser){
            throw new Error("Email already registered!");
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