import { Request, Response } from 'express'
import { GetAllOrdersByHomeIdService } from 'src/services/Order/GetAllOrdersByHomeIdService';

export class GetAllOrdersByHomeIdController {
  async handle(request: Request, response: Response) {

    const { home_id } = request.params;
    const getAllOrdersByHomeIdService = new GetAllOrdersByHomeIdService();

    const parsedHomeId = Number(home_id)
    const users = await getAllOrdersByHomeIdService.execute({
      home_id: parsedHomeId
    });
    
    console.log("All users finded");
    return response.status(200).json(users);
  }
}