import { CreateUserController } from '@controllers/CreateUserController';
import  { Router } from 'express';


const routes = Router();

routes.post('/users' , new CreateUserController().handle);



export default routes;
