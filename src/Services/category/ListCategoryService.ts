import prismaClient from "../../prisma";

class ListCategoryService {
    async execute(){

        // FINDMANY server para trazer tudo que encontrar
        const category = await prismaClient.category.findMany({
            select: { // vai trazer apenas oque for pedido de todos os dados armazenado no banco de dados
                id: true,
                name: true,
            }
        });

        return category;
    }
}

export { ListCategoryService };