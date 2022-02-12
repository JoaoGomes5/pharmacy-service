import { Medicine } from "@entities/Medicine"
import { getRepository } from "typeorm"

type MedicineRequest = {
  name: string,
  reference: string,
  active_ingredient: string,
  stock?: number,
  brand: string,
  intake: string
}

export class CreateMedicineService{
  async execute({ 
    name,
    reference,
    active_ingredient,
    stock,
    brand,
    intake
  }: MedicineRequest): Promise<Medicine | Error> {
    const repository = getRepository(Medicine)

    if(await repository.findOne({ reference })){
        return new Error(`Referece ${reference} already exists`)
    }

    const createdMedicine = repository.create({
      name,
      reference,
      active_ingredient,
      stock,
      brand,
      intake
    })

    await repository.save(createdMedicine)

    return createdMedicine
  }
}