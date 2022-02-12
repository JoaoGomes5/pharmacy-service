
import { CreateTestController } from '@controllers/Test/CreateTestController';

import { Router } from 'express';

const testRoutes = Router();


testRoutes.post('/' , new CreateTestController().handle);


export default testRoutes;