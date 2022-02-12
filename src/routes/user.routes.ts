import { Router } from 'express';

import { CreateUserController } from '@controllers/User/CreateUserController';
import { GetAllUsersController } from '@controllers/User/GetAllUsersController';

const userRoutes = Router();


userRoutes.post('/' , new CreateUserController().handle);
userRoutes.get('/', new GetAllUsersController().handle);


export default userRoutes;