import { Video } from '@entities/fileVideo/fileVideo.entity'
import { News } from '@entities/news/news.entity'
import { Presentation } from '@entities/presentation/presentation.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { SummaryLectures } from '@entities/summaryLectures/summaryLectures.entity'
import { TypeLectures } from '@entities/typeLectures/typeLectures.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('lectures')
export class Lectures{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'title', type: 'varchar' })
    title: string

    @Column({name: 'subtitle', type: 'text', nullable: true})
    subtitle: string

    @Column({ name: 'description', type: 'varchar' })
    description: string

    @Column({ name: 'create_date', type: 'timestamp' })
    createDate: Date

    @Column({ name: 'update_date', type: 'timestamp', nullable: true } )
    updateDate: Date

    @Column({ name: 'state_archive', type: 'boolean', default: false })
    stateArchive: boolean

    @ManyToOne(() => SummaryLectures, (summary) => summary.id)
    @JoinColumn({ name: 'lecture_summary'})
    lectureSummaryId: SummaryLectures

    @ManyToOne(() => Presentation, (pres) => pres.id) // Возможно связь OneToOne
    @JoinColumn({ name: 'presentation'})
    presentitionId: Presentation

    @OneToOne(() => Video, (video) => video.id)
    @JoinColumn({name: 'file_video'})
    lictureVideoId: Video

    @OneToOne(() => News, (news) => news.id)
    @JoinColumn({name: 'news_id'})
    newsId: number

    @ManyToOne(() => Satellites, (sat) => sat.id)
    @JoinColumn({name: 'satellites_id'})
    satellitesId: Satellites

    //Доработать связь с Чатом 
    // @Column({ name: 'lectures_id', type: 'integer', nullable: true }) 
    // lecturesId: number

    @ManyToOne(() => TypeLectures, (type) => type.id)
    @JoinColumn({name: 'type_id'}) 
    typeLectures: TypeLectures
    // Возможно добавление ссылки на картинку 
}