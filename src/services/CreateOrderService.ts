import { Medicine } from "@entities/Medicine"
import { Order } from "@entities/Order"
import { getRepository } from "typeorm"


type OrderRequest = {
  medicine_reference: string,
  home_id: number,
  quantity: number
}

export class CreateOrderService {
  async execute({ 
    medicine_reference,
    home_id,
    quantity
  }: OrderRequest): Promise<Order | Error> {

    const medicineRepository = getRepository(Medicine)
    const orderRepository = getRepository(Order)

    if (!medicineRepository.findOne({
      reference: medicine_reference
    })) {
      return new Error(`Medicine with ${medicine_reference} not found`)
    }

    const order = orderRepository.create({
      medicine_reference,
      home_id,
      quantity
    })

    await orderRepository.save(order)

    return order
  }
}