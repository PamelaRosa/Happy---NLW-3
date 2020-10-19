import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;
    
    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;
    
    @Column()
    open_on_weekends: boolean;
    //Relacionamento OneToMany: Um orfanato pode ter varias imagens
    // 2º Param -> Dado uma imagem que eu recebi, qual é o campo q retorna o relacionamento inverso (orfanato)
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update'] //quando for cadastrar ou alterar o orfanato, 
        //ele vai automaticamente fazer o mesmo com as imagens relacionadas
    })
    //JoinColumn : Qual a coluna que relaciona o orfanato com a imagem
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[];
}