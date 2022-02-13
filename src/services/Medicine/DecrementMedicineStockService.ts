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
      return new Error(`Stock with reference ${reference} is not enough to do complete the order, current stock is ${medicine.stock}`)
    }
    
    medicine.stock-=value

    await repository.save(medicine)

    console.log(`Medicine ${reference} decremented with ${value} on stock`);
    return medicine;

  }
}