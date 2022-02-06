import  UsersController  from '@controllers/UsersController';
import  { Router } from 'express';


const routes = Router();

routes.get('/' , UsersController.index);


export default routes;
