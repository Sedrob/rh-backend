import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('image_hash')
export class ImageHash{
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'image_name', type: 'varchar'})
    imageName: string

    @Column({name: 'description', type: 'varchar'})
    description: string

    @Column({name: 'file_hash', type: 'varchar'})
    fileHash: string
}