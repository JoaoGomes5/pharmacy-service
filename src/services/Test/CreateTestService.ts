import { Test } from "@entities/Test"
import { User } from "@entities/User"
import { getRepository } from "typeorm"
import { CreateUserService } from "../User/CreateUserService"


type TestRequest = {
  user: {
    nif: number,
    name: string,
    email: string,
    phone: number
    is_infected?: boolean
  },
  result: string 
}

export class CreateTestService {
  async execute({ 
    user, result
  }: TestRequest): Promise<Test> {
    
    const createUserService = new CreateUserService();
    const userRepository = getRepository(User)
    const testRepository = getRepository(Test)


    if (!await userRepository.findOne({
        nif: user.nif
    })) {
      await createUserService.execute({
        nif: user.nif,
        name: user.name,
        email: user.email,
        phone: user.phone
      });
    }

    const selectedUser = await userRepository.findOne({
      nif: user.nif
    })

    if (!result) {
      selectedUser.is_infected = false,
      selectedUser.is_isolated = false
    } else {
      selectedUser.is_infected = true,
      selectedUser.is_isolated = true
    }
    
    await userRepository.save(selectedUser)

    const test = testRepository.create({
      user_nif: user.nif
    })
    
    test.result = Boolean(result)

    await testRepository.save(test);

    return test
    
  }
}