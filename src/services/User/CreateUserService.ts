import { User } from "@entities/User"
import { getRepository } from "typeorm"


type UserRequest = {
  nif: number
  name: string
  email: string
  phone: number
  is_infected: boolean
}

export class CreateUserService {
  async execute({ 
    nif, 
    name, 
    email, 
    phone, 
    is_infected
  }: UserRequest): Promise<User | Error> {
    const repository = getRepository(User)

    if(await repository.findOne({ nif })){
        return new Error("User already exists")
    }

    const user =  repository.create({
      nif, 
      name, 
      email, 
      phone, 
      is_infected
    })

    await repository.save(user)

    return user
  }
}