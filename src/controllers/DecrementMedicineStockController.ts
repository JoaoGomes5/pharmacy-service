import { Request, Response } from 'express'
import { DecrementMedicineStockService } from 'src/services/DecrementMedicineStockService';

export class DecrementMedicineStockController {
  async handle(request: Request, response: Response) {
    const {
      reference,
    } = request.params;

    const {
      value
    } = request.body

    const decrementMedicineStockService = new DecrementMedicineStockService()

    const result =  await decrementMedicineStockService.execute({
      reference,
      value
    });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }
    
    console.log(`Medicine ${reference} incremented with ${value} on stock`);
    return response.status(200).json(result)
  }
}