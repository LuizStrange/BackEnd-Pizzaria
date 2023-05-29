import { Request, Response } from "express";
import { CreateUserServices } from '../../Services/user/CreateUserServices';

class CreateUserCOntroller {
    async handle(req: Request, res: Response) {
        const {name, email, password} = req.body;

        const createUserService = new CreateUserServices();

        const user = await createUserService.execute({
            name,
            email,
            password
        }); // vai esperar o execute para dps ir para a linha de baixo com o await

        return res.json(user);
    }
}

export { CreateUserCOntroller };