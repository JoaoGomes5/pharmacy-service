import { Request, Response } from 'express'
import { IncrementMedicineStockService } from 'src/services/IncrementMedicineStockService';

export class IncrementMedicineStockController {
  async handle(request: Request, response: Response) {
    const {
      reference,
    } = request.params;

    const {
      value
    } = request.body

    const incrementMedicineStockService = new IncrementMedicineStockService()

    const result =  await incrementMedicineStockService.execute({
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