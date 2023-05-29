import prismaClient from "../../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({category_id}: ProductRequest) {

        const findByCategory = await prismaClient.product.findMany({
            where: { // Vai puxar todos com o FINDMANY, porem apenas no qual for a categoria informada no id.
                category_id: category_id
            }
        })

        return findByCategory;
    }
}

export { ListByCategoryService };