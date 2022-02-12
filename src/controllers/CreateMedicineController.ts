import { Request, Response } from 'express'
import { CreateMedicineService } from 'src/services/CreateMedicineService'

export class CreateMedicineController{
  async handle(request: Request, response: Response) {
    const {
      name,
      reference,
      active_ingredient,
      stock,
      brand,
      intake,
    } = request.body

    const createMedicineService = new CreateMedicineService();
    
    const result = await createMedicineService.execute({
      name,
      reference,
      active_ingredient,
      stock,
      brand,
      intake
    });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }
    
    console.log("Medicine Created");
    return response.status(200).json(result)


  }
}