import { User } from '@entities/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm' 

@Entity('roles')
export class UserRole{
    @PrimaryGeneratedColumn( {name: 'role_id'})
    id: number;

    @Column({ name: 'name', type: 'text' })
    name: string

    @Column({ name: 'description', type: 'text', nullable: true })
    description: string

    @Column({ name: 'code', type: 'varchar' })
    code: string

}