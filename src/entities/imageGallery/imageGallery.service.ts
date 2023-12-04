import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ImageGallery } from "./imageGallery.entity";


@Injectable()
export class ImageGalleryService{
    constructor(@InjectRepository(ImageGallery) private readonly newsRepository: Repository<ImageGallery>,){}
    // Создание записи в БД
    public async createImageGalleryServices(imageGalleryData: any){
        const imageGalleryNew = await this.newsRepository.save({
            imageId: imageGalleryData.imageId,
            galleryId: imageGalleryData.galleryId
        })
        return await this.newsRepository.save(imageGalleryNew);
    } 
}