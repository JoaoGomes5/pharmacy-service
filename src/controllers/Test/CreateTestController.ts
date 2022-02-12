import { Request, Response } from "express";
import { CreateTestService } from "src/services/Test/CreateTestService";


export class CreateTestController {
  async handle(request: Request, response: Response) {
   
    const {
      user,
      result
    } = request.body;

    const createTestService = new CreateTestService() 

    const res = await createTestService.execute({
      user,
      result
    })

    console.log(`Test created`);
    return response.status(200).json(res)

    
  }
}