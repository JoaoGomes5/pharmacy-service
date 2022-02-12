
import { CreateTestController } from '@controllers/Test/CreateTestController';
import { GetAllTestsByUserNIFController } from '@controllers/Test/GetAllTestsByUserNIFController';

import { Router } from 'express';

const testRoutes = Router();


testRoutes.get('/:nif' , new GetAllTestsByUserNIFController().handle);
testRoutes.post('/' , new CreateTestController().handle);

export default testRoutes;