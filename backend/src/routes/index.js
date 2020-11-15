import { Router } from 'express';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import authMiddleware from '../app/middlewares/auth';
import ProviderController from '../app/controllers/ProviderController';
import AppointmentController from '../app/controllers/AppointmentController';
import ScheduleController from '../app/controllers/ScheduleController';
import AvailableController from '../app/controllers/AvailableController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.post('/appointments', AppointmentController.delete);
routes.get('/schedule', ScheduleController.index);

export default routes;
