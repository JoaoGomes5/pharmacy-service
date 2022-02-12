import { Request, Response } from "express";
import { CreateOrderService } from "src/services/CreateOrderService";


export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const {
      medicine_reference,
      home_id,
      quantity
    } = request.body;
    const createOrderService = new CreateOrderService();

    const result = createOrderService.execute({
      medicine_reference,
      home_id,
      quantity
    })

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }
    
    console.log("Order Created");
    return response.status(200).json(result)

    
  }
}