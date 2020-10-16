import { Router } from 'express';
import multer from 'multer';

import uploadCOnfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';


const routes = Router();
const upload = multer(uploadCOnfig);

//MVC -> Model/Views/Controllers

//Métodos comuns: index, show, create, update, delete

//Criar orfanatos
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show); // Procurar um orfanato pelo id
routes.post('/orphanages', upload.array('images'), OrphanagesController.create); // Ao mesmo tempo que voce cadastra o orfanato, é possivel adicionar as fotos junto

export default routes;