import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface userRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserServices {
    async execute({name, email, password}: userRequest) {

        //VERIFICAR SE ELE ENVIOU UM EMAIL:
        if(!email) {
            throw new Error("Email Incorrect!")
        }
        // Verificar se esse email ja está cadastrado na plataforma
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("User already exists!")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({ // vai criar o user no bancos de dados com os dados que passou
            data: {
                name: name,
                email: email,
                password: passwordHash,
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        }) 

        return user;
    }
}

export { CreateUserServices };