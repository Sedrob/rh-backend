import { Satellites } from '@entities/satellites/satellites.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('categorySatellites')
export class CategorySatellites{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name', type: 'varchar' })
    name: string

    @Column({ name: 'tag', type: 'varchar' })
    tag: string

    @ManyToOne(() => Satellites, (satellites) => satellites.id,)//(OnDelete: 'CASCADE')
    @JoinColumn({ name: 'satellites_id'})  
    satellites: Satellites

}