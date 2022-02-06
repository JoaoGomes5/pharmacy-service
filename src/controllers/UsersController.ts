import { Request, Response } from 'express';
import { User } from '@models/User'

export default {

  async index(request: Request, response: Response){
    return response.status(200).json({
      message: "Hello World"
    });
  },
}
