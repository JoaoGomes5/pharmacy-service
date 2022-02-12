import { CreateOrderController } from '@controllers/Order/CreateOrderController';

import { Router } from 'express';

const orderRoutes = Router();


orderRoutes.post('/' , new CreateOrderController().handle);


export default orderRoutes;