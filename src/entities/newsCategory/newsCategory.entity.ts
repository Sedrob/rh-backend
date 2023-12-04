import { News } from '@entities/news/news.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('newsCategory')
export class NewsCategory{
    @PrimaryGeneratedColumn({ name: 'category_id'})
    id: number

    @Column({ name: 'name', type: 'varchar' })
    category: string

    @Column({ name: 'state_archive', type: 'boolean', default: false })
    stateArchive: boolean
    
}