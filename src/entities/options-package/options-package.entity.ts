import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Package } from '@entities/package/package.entity';
import { Option } from '@entities/options/option.entity';

@Entity('options_package')
export class OptionsPackage {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Package, (pack) => pack.optionsPackage)
    @JoinColumn({name: 'package_id'})
    packageId: Package

    @ManyToOne(() => Option, (option) => option.optionsPackage)
    @JoinColumn({name: 'option_id'})
    optionId: Option
}
