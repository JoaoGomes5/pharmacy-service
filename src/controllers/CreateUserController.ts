import { json, Request, response, Response } from "express";
import { CreateUserService } from "src/services/CreateUserService";



export class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      nif, 
      name, 
      email, 
      phone, 
      is_infected
    } = req.body;

    const createUserService = new CreateUserService();

    const result = await createUserService.execute({ 
      nif, 
      name, 
      email, 
      phone, 
      is_infected
    })

    if(result instanceof Error) {
      return res.status(400).json(result.message)
    }
    
    console.log("User Created");
    return res.status(200).json(result)
  }
}