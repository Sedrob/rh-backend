import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('typeEvents')
export class TypeEvents{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'text'})
    name: string
}