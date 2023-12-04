import { User } from '@entities/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm' 

@Entity('presentation')
export class Presentation{
    @PrimaryGeneratedColumn( {name: 'role_id'})
    id: number;

    @Column({ name: 'doc_name', type: 'text' })
    docName: string

    @Column({ name: 'file_hash', type: 'varchar' })
    fileHash: string

}