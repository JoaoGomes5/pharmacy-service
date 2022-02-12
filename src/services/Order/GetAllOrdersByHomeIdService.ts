import { getRepository } from "typeorm";

import { Order } from "@entities/Order";

type GetAllOrdersByHomeIdRequest = {
  home_id: number
}

export class GetAllOrdersByHomeIdService {
  async execute({ home_id }: GetAllOrdersByHomeIdRequest): Promise<Order[] | Error> {
    const repository =  getRepository(Order);
     
    const medicines = await repository.find({ home_id });
    
    return medicines;
  }
}