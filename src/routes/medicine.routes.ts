import { CreateMedicineController } from '@controllers/Medicine/CreateMedicineController';
import { DecrementMedicineStockController } from '@controllers/Medicine/DecrementMedicineStockController';
import { GetAllMedicinesController } from '@controllers/Medicine/GetAllMedicinesController';
import { IncrementMedicineStockController } from '@controllers/Medicine/IncrementMedicineStockController';

import { Router } from 'express';

const medicineRoutes = Router();


medicineRoutes.get('/', new GetAllMedicinesController().handle)

medicineRoutes.post('/', new CreateMedicineController().handle);

medicineRoutes.put(
    '/:reference/increment',
  new IncrementMedicineStockController().handle
);

medicineRoutes.put(
  '/:reference/decrement',
  new DecrementMedicineStockController().handle);


export default medicineRoutes;