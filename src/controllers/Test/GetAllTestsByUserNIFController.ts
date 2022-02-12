import { Request, Response } from 'express'
import { GetAllTestsByUserNIFService } from 'src/services/Test/GetAllTestsByUserNIFService';

export class GetAllTestsByUserNIFController {
  async handle(request: Request, response: Response) {
    const { nif } = request.params;
    const getAllTestsByUserNIFService = new GetAllTestsByUserNIFService();

    const parsedNif = Number(nif)
    const result = await getAllTestsByUserNIFService.execute({
      nif: parsedNif
    });

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }
    
    console.log(`All tests finded by user with nif ${nif}`);
    return response.status(200).json(result)
  }
}