import prismaClient from "../../prisma";

interface DetailRequest {
    order_id: string;
}

class DetailOrderService {
    async execute({order_id}: DetailRequest) {
        const orders = await prismaClient.item.findMany({
            where: {
                order_id: order_id
            },
            include: { // Ele pega oque esta referencia no banco de dados, caso esteja inteligado para voce pega informações de outra categoria:
                product: true, // vai pega tudo sobre o produto
                order: true // vai pega tudo sobre as orders
            }
        })

        return orders;
    }
}

export { DetailOrderService };