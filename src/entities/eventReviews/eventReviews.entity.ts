import { Events } from '@entities/events/events.entity'
import { News } from '@entities/news/news.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('eventReviews')
export class EventsReviews{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'userId'})
    userId: User

    @ManyToOne(() => Events, (event) => event.id)
    @JoinColumn({name: 'eventsID'})
    eventsId: Events

    @Column({ name: 'description', type: 'text'})
    description: string

    @Column({name: 'date_create', type: 'timestamp'})
    dateCreate: Date

}