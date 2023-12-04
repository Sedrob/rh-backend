import { Gallery } from '@entities/gallery/gallery.entity'
import { NewsCategory } from '@entities/newsCategory/newsCategory.entity'
import { UserFavoritesNews } from '@entities/userFavoritesNews/userFavoritesNews.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('satellites')
export class Satellites{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'varchar' })
    name: string

    @Column({ name: 'title', type: 'varchar' })
    title: string

    @Column({ name: 'purpose', type: 'varchar' })
    purpose: string

    @Column({ name: 'objectiv', type: 'varchar' })
    objectiv: string

    @Column({ name: 'target', type: 'varchar' })
    target: string

    @Column({ name: 'date_orbit', type: 'timestamp' })
    dateOrbit: Date

    @Column({ name: 'date_out', type: 'timestamp'} )
    dateOut: Date

    @Column({ name: 'state_archive', type: 'boolean', default: false })
    stateArchive: boolean

}