import { Equipment } from '@entities/equipment/equipment.entity'
import { News } from '@entities/news/news.entity'
import { StateEvents } from '@entities/stateEvents/stateEvents.entity'
import { TypeEvents } from '@entities/typeEvents/typeEvents.entity'
import { User } from '@entities/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'
import { Package } from "@entities/package/package.entity";

@Entity('viewPackage')
export class ViewPackage{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'name_Package', type: 'varchar'})
    namePackage: string

    @OneToMany(() => Package, (pack) => pack.viewPackageId)
    packages: Package[]
}