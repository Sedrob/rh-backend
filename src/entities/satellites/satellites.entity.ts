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

    @Column({ name: 'description', type: 'varchar'})
    description: string

    @Column({ name: 'purpose', type: 'varchar' })//Цель полета
    purpose: string

    @Column({ name: 'date_orbit', type: 'timestamp', nullable: true })
    dateOrbit: Date

    @Column({ name: 'date_out', type: 'timestamp', nullable: true})
    dateOut: Date

    @Column({ name: 'state_archive', type: 'boolean', default: false })
    stateArchive: boolean

}