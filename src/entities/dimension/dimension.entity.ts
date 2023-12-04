import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "@entities/options/option.entity";

@Entity('dimension')
export class Dimension {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'name', type: 'text'})
    name: string

    @Column({name: 'description', type: 'varchar'})
    description: string

    @OneToMany(() => Option, (option) => option.dimensionId)
    options: Option[]

}
