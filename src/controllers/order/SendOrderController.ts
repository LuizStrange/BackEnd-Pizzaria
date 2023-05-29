import { Request, Response } from "express";
import { SendOrderService } from "../../Services/order/SendOrderService";

class SendOrderController {
    async handle(req: Request, res: Response) {
        const { order_id } = req.body;

        const sendOrder = new SendOrderService();

        const Order = await sendOrder.execute({order_id});

        return res.json(Order);
    }
}

export { SendOrderController };