import { Equipment } from '@entities/equipment/equipment.entity'
import { News } from '@entities/news/news.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('projection')
export class Projection{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'text'})
    name: string

    @Column({ name: 'description', type: 'varchar'})
    description: string

    @Column({ name: 'image', type: 'varchar', nullable: true})
    image: string

    @Column({ name: 'archive', type: 'boolean', default: false})
    archive: boolean

    @ManyToOne(() => Equipment, (equipment) => equipment.id)
    @JoinColumn({name: 'equipment_id'})
    equipmentId: Equipment


}