import { News } from '@entities/news/news.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('events')
export class Events{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'text'})
    name: string

    @Column({name: 'subtitle', type: 'text', nullable: true})
    subtitle: string

    @Column({name: 'date_create', type: 'timestamp'})
    dateCreate: Date

    @Column({name: 'date_update', type: 'timestamp'})
    dateUpdate: Date

    @Column({ name: 'description', type: 'varchar'})
    description: string

    // @Column({ name: 'signedUp', nullable: true})
    // signedUp: number

    @OneToOne(() => News, (news) => news.id)
    @JoinColumn({name: 'news_id'})
    newsId: News

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'userCreateId'})
    userCreateId: User

    @ManyToOne(() => StateEvents, (state) => state.id)
    @JoinColumn({name: 'stateId'})
    eventsState: StateEvents

    @ManyToOne(() => TypeEvents, (type) => type.id)
    @JoinColumn({name: 'typeId'})
    eventsType: TypeEvents

    @Column({name: 'delete', type: 'boolean', default: false})
    delete: boolean

    @ManyToOne(() => Satellites, (sat) => sat.id)
    @JoinColumn({name: 'satellites_id'})
    satellitesId: Satellites

    @Column({name: 'dateStart', type: 'timestamp'})//Убрать Null
    dateStart: Date

    @Column({name: 'dateEnd', type: 'timestamp'})
    dateEnd: Date

}