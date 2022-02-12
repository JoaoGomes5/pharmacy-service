import { Request, Response } from "express";
import { GetAllUsersService } from "src/services/GetAllUsersService";

export class GetAllUsersController {
  async handle(request: Request, response: Response){
    const getAllUsersService = new GetAllUsersService();

    const users = await getAllUsersService.execute();
    
    console.log("All users finded");
    return response.status(200).json(users);
  }
}