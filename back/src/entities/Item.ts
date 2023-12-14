import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('itens')
export class itens {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    title: string

    @Column({type: 'text'})
    desc: string

    @Column({type: 'integer'})
    price: number

    @Column({type: 'text'})
    image: string

    @Column({type: 'text'})
    color: string

    @Column({type: 'text'})
    size: string

    @Column({type: 'integer'})
    idUser: number

    @Column({type: 'boolean', default: true})
    active: boolean
}