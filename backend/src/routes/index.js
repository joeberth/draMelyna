import { Router } from 'express';
import User from '../app/models/User';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import authMiddleware from '../app/middlewares/auth';
import ProviderController from '../app/controllers/ProviderController';
import AppointmentController from '../app/controllers/AppointmentController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.get('/providers', ProviderController.index);
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

export default routes;
