import {Request, Response} from 'express';
import { ListByCategoryService } from '../../Services/products/ListByCategoryService';

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string; // "as" serve para adicionar algo para definir/typar algo numa variavel como vc deseja

        const listByCategory = new ListByCategoryService();

        const products = await listByCategory.execute({category_id});

        return res.json(products);
    }
}

export { ListByCategoryController };