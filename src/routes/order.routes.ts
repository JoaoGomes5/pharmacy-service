import { CreateOrderController } from '@controllers/Order/CreateOrderController';
import { GetAllOrdersByHomeIdController } from '@controllers/Order/GetAllOrdersByHomeIdController';

import { Router } from 'express';

const orderRoutes = Router();


orderRoutes.get('/:home_id' , new GetAllOrdersByHomeIdController().handle);
orderRoutes.post('/' , new CreateOrderController().handle);


export default orderRoutes;