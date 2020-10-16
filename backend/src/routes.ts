import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

//MVC -> Model/Views/Controllers

//Métodos comuns: index, show, create, update, delete

//Criar orfanatos
routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);

export default routes;