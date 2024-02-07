import { Events } from '@entities/events/events.entity'
import { News } from '@entities/news/news.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('eventsRoles')
export class eventsRoles{
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'name', type: 'varchar'})
    name: string

    @Column({name: 'decription', type: 'varchar'})
    decription: string

}