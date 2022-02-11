import { Medicine } from "@entities/Medicine"
import { Order } from "@entities/Order"
import { getRepository } from "typeorm"


type OrderRequest = {
  reference: string,
  home_id: string,
  quantity: number
}

export class CreateUserService {
  async execute({ 
   reference,
   home_id,
   quantity
  }: OrderRequest): Promise<Order | Error> {

    const medicineRepository = getRepository(Medicine)
    const orderRepository = getRepository(Order)

    if(!medicineRepository.findOne({ reference })) {
      return new Error(`Medicine with ${reference} not found`)
    }

    


    
  }
}