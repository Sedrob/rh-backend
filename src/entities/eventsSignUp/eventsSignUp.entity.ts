import { Events } from '@entities/events/events.entity'
import { eventsRoles } from '@entities/eventsRoles/eventsRoles.entity'
import { News } from '@entities/news/news.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('signedUp')
export class signedUp{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (singUser) => singUser.id)
    @JoinColumn({name: 'user_id'})
    singUser: User

    @ManyToOne(() => eventsRoles, (roles) => roles.id)
    @JoinColumn({name: 'role_id'})
    roleId: eventsRoles

    @Column({name: 'date_create', type: 'timestamp'})
    dateCreate: Date

    @ManyToOne(() => Events, (events) => events.id)
    @JoinColumn({ name: 'events_id'})
    eventsId: Events

}