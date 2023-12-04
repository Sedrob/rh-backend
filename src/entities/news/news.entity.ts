import { Gallery } from '@entities/gallery/gallery.entity'
import { NewsCategory } from '@entities/newsCategory/newsCategory.entity'
import { Satellites } from '@entities/satellites/satellites.entity'
import { UserFavoritesNews } from '@entities/userFavoritesNews/userFavoritesNews.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('news')
export class News{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => NewsCategory, (newsCategory) => newsCategory.id )
    @JoinColumn({ name: 'category_id'})
    category: NewsCategory

    @Column({ name: 'title', type: 'varchar' })
    title: string

    @Column({name: 'subtitle', type: 'text', nullable: true})
    subtitle: string

    @Column({ name: 'text', type: 'varchar' })
    newsText: string

    @Column({ name: 'create_date', type: 'timestamp' })
    createDate: Date

    @Column({ name: 'update_date', type: 'timestamp', nullable: true } )
    updateDate: Date

    @Column({ name: 'state_archive', type: 'boolean', default: false })
    stateArchive: boolean

    @ManyToOne(() => Gallery, (gallery) => gallery.id)
    @JoinColumn({ name: 'images'})
    images: Gallery

    @Column({ name: 'views', type: 'integer' })
    views: number

    @Column({ name: 'favouritos', type: 'integer', nullable: true})
    favouritos: number

    @ManyToOne(() => Satellites, (sat) => sat.id)
    @JoinColumn({name: 'satellites_id'})
    satellitesId: Satellites

    @Column({ name: 'events_id', type: 'integer', nullable: true}) // Убрать потом пустату
    eventsId: number

    @Column({ name: 'lectures_id', type: 'integer', nullable: true }) //Убрать потом пустату 
    lecturesId: number

    @Column({ name: 'gallery_id', type: 'integer', nullable: true }) //Убрать потом пустату 
    galleryId: number
}