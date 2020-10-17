import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import orphanageView from '../views/orphanages_view';

import Orphanage from '../models/Orphanage';

export default {
    //Listar os orfanatos
    async index(request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images'] //passar a entity das imagens para apresentar quando solicitar a lista de orfanatos
        });
        return response.json(orphanageView.renderMany(orphanages));
    },
    //Encontrar um orfanato pelo ID
    async show(request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id,
            {
                relations: ['images']
            });

        return response.json(orphanageView.render(orphanage));
    },

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
        } = request.body;

        const orphanagesRepository = getRepository(Orphanage);

        const requestImages = request.files as Express.Multer.File[]; //Reforçando que essa const é um array de arquivos 
        //através do : as Express.Multer.File[];
        const images = requestImages.map(image => {
            return { path: image.filename } //path é a unica informação que necessita ser preenchida, o resto é preenchido automaticamente
        })

        //Somente cria o orfanato, não salva no banco
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });

        //Para salvar o orfanato criado no banco de dados
        await orphanagesRepository.save(orphanage);

        return response.status(201).json(orphanage);
        //status 201 = created successfully
    }
}