
import { CreateOrderController } from '@controllers/Order/CreateOrderController';


import { CreateMedicineController } from '@controllers/Medicine/CreateMedicineController';
import { DecrementMedicineStockController } from '@controllers/Medicine/DecrementMedicineStockController';
import { IncrementMedicineStockController } from '@controllers/Medicine/IncrementMedicineStockController';


import  { Router } from 'express';
import userRoutes from './user.routes';
import orderRoutes from './order.routes';
import medicineRoutes from './medicine.routes';


const routes = Router();

routes.use('/users' , userRoutes);

routes.use('/medicines', medicineRoutes)

routes.use('/orders' , orderRoutes);



export default routes;
