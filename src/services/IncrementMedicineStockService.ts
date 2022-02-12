import { Medicine } from "@entities/Medicine"
import { getRepository } from "typeorm"



type IncrementMedicineStockRequest = {
  reference: string,
  value: number 
}

export class IncrementMedicineStockService{
  async execute({ reference , value }: IncrementMedicineStockRequest): Promise<Medicine | Error> {

    const repository = getRepository(Medicine)

    const medicine = await repository.findOne({ reference })

    if(!medicine){
        return new Error(`Medicine with referece ${reference} does not exists`)
    }

    medicine.stock+=value

    await repository.save(medicine)

    return medicine
  }
}