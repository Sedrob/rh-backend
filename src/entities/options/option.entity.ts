import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dimension } from '@entities/dimension/dimension.entity';
import { Result } from "@entities/result/result.entity";
import { OptionsPackage } from "@entities/options-package/options-package.entity";

@Entity('option')
export class Option {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'name_options', type: 'text'})
    nameOptions: string

    @Column({name: 'description', type: 'varchar'})
    description: string

    @Column({name: 'object_options', type: 'varchar'})
    objectOptions: string

    @ManyToOne(() => Dimension, (dimension) => dimension.options)
    @JoinColumn({name: 'dimension_id'})
    dimensionId: Dimension

    @ManyToOne(() => Result, (result) => result.options)
    @JoinColumn({name: 'result_id'})
    resultId: Result

    @OneToMany(() => OptionsPackage, (optionPackage) => optionPackage.optionId)
    optionsPackage: OptionsPackage[]
}
