import { User } from "@entities/User";
import { getRepository } from "typeorm";

export class GetAllUsersService {
  async execute() {
    const repository =  getRepository(User);

    const users = await repository.find();
    
    return users;
  }
}