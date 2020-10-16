import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

//MVC -> Model/Views/Controllers

//Criar orfanatos
routes.post('/orphanages', OrphanagesController.create);

export default routes;