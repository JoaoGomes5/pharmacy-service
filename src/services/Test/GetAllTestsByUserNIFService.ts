import { Test } from "@entities/Test";
import { User } from "@entities/User";
import { getRepository } from "typeorm";

type GetAllTestsByUserNIFRequest = {
  nif: number
}

export class GetAllTestsByUserNIFService {
  async execute({ nif }: GetAllTestsByUserNIFRequest): Promise<Test[] | Error> {

    const testRepository = getRepository(Test);
    const userRepository = getRepository(User)

    if (!await userRepository.findOne({ nif })) {
      return new Error("User does not exists")
    }

    const expectedTests = await testRepository.find({ user_nif: nif })

    return expectedTests;

  }
}