import { Request, Response } from 'express'
import { GetAllMedicinesService } from 'src/services/Medicine/GetAllMedicinesService';

export class GetAllMedicinesController {
  async handle(request: Request, response: Response) {
    const getAllMedicinesService = new GetAllMedicinesService();

    const medicines = await getAllMedicinesService.execute();
    
    console.log("All medicines finded");
    return response.status(200).json(medicines);
  }
}