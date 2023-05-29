import { Request, Response } from "express";
import { RemoveOrderService } from "../../Services/order/RemoveOrderService";

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const orderRemove = new RemoveOrderService();

        const order = await orderRemove.execute({order_id});

        return res.json(order);
    }
}

export { RemoveOrderController };