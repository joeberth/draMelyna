import { Router } from 'express';
import User from '../app/models/User';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import authMiddleware from '../app/middlewares/auth'
import ProviderController from '../app/controllers/ProviderController'
import AppointmentController from '../app/controllers/AppointmentController';

const routes = Router();
const patients = [
  { name: 'Joao', age: 10 },
  { name: 'Maria', age: 11 },
];

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.get('/providers', ProviderController.index);
routes.post('/appointments', AppointmentController.store);


export default routes;
