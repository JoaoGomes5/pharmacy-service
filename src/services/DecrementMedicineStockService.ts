import { Medicine } from "@entities/Medicine"
import { getRepository } from "typeorm"

type DecrementMedicineStockRequest = {
  reference: string,
  value: number
}

export class DecrementMedicineStockService{
  async execute( { reference, value }: DecrementMedicineStockRequest ): Promise<Medicine | Error> {
    const repository = getRepository(Medicine)

    if(!await repository.findOne({ reference })){
        return new Error(`Medicine with referece ${reference} does not exists`)
    }
    const medicine = await repository.findOne({ reference })
    
    
    if (medicine.stock < value) {
      return new Error(`Stock with reference ${reference} is not enough to do complete the order`)
    }
    
    medicine.stock-=value

    await repository.save(medicine)

    return medicine;

  }
}