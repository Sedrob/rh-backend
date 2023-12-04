import { User } from '@entities/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm' 

@Entity('typeLectures')
export class TypeLectures{
    @PrimaryGeneratedColumn( {name: 'role_id'})
    id: number;

    @Column({ name: 'name', type: 'text' })
    name: string

    @Column({ name: 'description', type: 'varchar' })
    description: string

}