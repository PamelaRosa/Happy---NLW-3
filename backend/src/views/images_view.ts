import Image from '../models/Image';

export default {
    //método render --> responsavel por pegar o orfanato e retornar ele da maneira que precisamos para o frontend (web)
    render(image: Image) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
        };
    },
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};