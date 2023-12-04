import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ViewPackage } from '@entities/viewPackage/viewPackage.entity';
import { OptionsPackage } from "@entities/options-package/options-package.entity";

@Entity('package')
export class Package {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'date_response_package'})
    responseDate: Date

    @ManyToOne(() => ViewPackage, (viewPackage) => viewPackage.packages)
    @JoinColumn({name: 'viewpackage_id'})
    viewPackageId: ViewPackage

    @OneToMany(() => OptionsPackage, (optionsPackage) => optionsPackage.packageId)
    optionsPackage: OptionsPackage[]

    @Column({name:'result', type:'varchar'})
    result: string
}
