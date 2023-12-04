import { Gallery } from '@entities/gallery/gallery.entity'
import { ImageHash } from '@entities/imageHash/imageHash.entity'
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'

@Entity('imageGallery')
export class ImageGallery{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => ImageHash, (imageHash) => imageHash.id)
    @JoinColumn({name: 'image_id'})
    imageId: ImageHash

    @ManyToOne(() => Gallery, (gallery) => gallery.id)
    @JoinColumn({name: 'gallery_id'})
    galleryId: Gallery
}