import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('stateEvents')
export class StateEvents{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'text'})
    name: string
}