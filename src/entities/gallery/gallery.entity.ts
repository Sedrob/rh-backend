import { News } from '@entities/news/news.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('gallery')
export class Gallery{
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'date_create', type: 'timestamp'})
    dateCreate: Date

    @Column({name: 'date_update', type: 'timestamp'})
    dateUpdate: Date

    @Column({name: 'name', type: 'text'})
    galleryName: string

    @Column({name: 'author', type: 'text', nullable: true})
    author: string

    @Column({name: 'state_archive', type: 'boolean', default: false})
    stateArchive: boolean

    @ManyToOne(() => Satellites, (sat) => sat.id)
    @JoinColumn({name: 'satellites_id'})
    satellitesId: Satellites

    @ManyToOne(() => News, (news) => news.id)
    @JoinColumn({name: 'news_id'})
    newsId: News
}