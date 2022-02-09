import { Request, Response } from "express";
import { CreateUserService } from "src/services/CreateUserService";



export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      nif, 
      name, 
      email, 
      phone, 
      is_infected
    } = request.body;

    const createUserService = new CreateUserService();

    const result = await createUserService.execute({ 
      nif, 
      name, 
      email, 
      phone, 
      is_infected
    })

    if(result instanceof Error) {
      return response.status(400).json(result.message)
    }
    
    console.log("User Created");
    return response.status(200).json(result)
  }
}