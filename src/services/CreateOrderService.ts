import { DecrementMedicineStockController } from "@controllers/DecrementMedicineStockController"
import { Medicine } from "@entities/Medicine"
import { Order } from "@entities/Order"
import { getRepository } from "typeorm"
import { DecrementMedicineStockService } from "./DecrementMedicineStockService"


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

    const decrementMedicineStockService = new DecrementMedicineStockService()

    const medicineRepository = getRepository(Medicine)
    const orderRepository = getRepository(Order)
    
    const medicine = await medicineRepository.findOne({
      reference: medicine_reference
    })
    
    if (!medicine) {
      return new Error(`Medicine with ${medicine_reference} not found`)
    }

    const result = await decrementMedicineStockService.execute({
      reference: medicine_reference,
      value: quantity
    })  
    
    if(result instanceof Error) {
      return new Error(result.message)
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