import { News } from '@entities/news/news.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('equipment')
export class Equipment{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'text'})
    name: string

    @Column({ name: 'description', type: 'varchar'})
    description: string

    @ManyToOne(() => Satellites, (sat) => sat.id)
    @JoinColumn({name: 'satellites_id'})
    satellitesId: Satellites

    @Column({ name: 'code_object', type: 'varchar'})
    codeObject: string

}