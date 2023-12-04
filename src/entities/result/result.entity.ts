import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Option } from "@entities/options/option.entity";

@Entity('result')
export class Result {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'name', type: 'text'})
    name: string

    @Column({name: 'description', type: 'varchar'})
    description: string

    @OneToMany(() => Option, (option) => option.resultId)
    options: Option[]
}
