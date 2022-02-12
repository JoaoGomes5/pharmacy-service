import { Medicine } from "@entities/Medicine";
import { getRepository } from "typeorm";

export class GetAllMedicinesService {
  async execute() {
    const repository =  getRepository(Medicine);

    const medicines = await repository.find();
    
    return medicines;
  }
}