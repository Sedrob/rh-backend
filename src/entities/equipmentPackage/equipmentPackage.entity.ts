import { Equipment } from '@entities/equipment/equipment.entity'
import { ViewPackage } from '@entities/viewPackage/viewPackage.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'


@Entity('equipmentPackage')
export class EquipmentPackage{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Equipment, (equipment) => equipment.id)
    @JoinColumn({name: 'equipment_id'})
    equipmentId: Equipment

    @ManyToOne(() => ViewPackage, (viewPackage) => viewPackage.id)
    @JoinColumn({name: 'viewPackage_id'})
    viewPackageId: ViewPackage

}