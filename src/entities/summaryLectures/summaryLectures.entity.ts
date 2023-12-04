import { User } from '@entities/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm' 

@Entity('summaryLectures')
export class SummaryLectures{
    @PrimaryGeneratedColumn( {name: 'role_id'})
    id: number;

    @Column({ name: 'doc_name', type: 'text' })
    docName: string

    @Column({ name: 'archive', type: 'boolean', default: 'false' })
    archive: boolean

    @Column({ name: 'file_hash', type: 'varchar' })
    fileHash: string

}