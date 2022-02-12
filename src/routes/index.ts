import { CreateMedicineController } from '@controllers/CreateMedicineController';
import { CreateUserController } from '@controllers/CreateUserController';
import { GetAllUsersController } from '@controllers/GetAllUsersController';
import  { Router } from 'express';


const routes = Router();

routes.post('/users' , new CreateUserController().handle);
routes.get('/users', new GetAllUsersController().handle);


routes.post('/medicines' , new CreateMedicineController().handle);



export default routes;
