import { CreateMedicineController } from '@controllers/Medicine/CreateMedicineController';
import { DecrementMedicineStockController } from '@controllers/Medicine/DecrementMedicineStockController';
import { IncrementMedicineStockController } from '@controllers/Medicine/IncrementMedicineStockController';


import { Router } from 'express';

const medicineRoutes = Router();


medicineRoutes.post('/', new CreateMedicineController().handle);

medicineRoutes.put(
    '/:reference/increment',
  new IncrementMedicineStockController().handle
);

medicineRoutes.put(
  '/:reference/decrement',
  new DecrementMedicineStockController().handle);


export default medicineRoutes;