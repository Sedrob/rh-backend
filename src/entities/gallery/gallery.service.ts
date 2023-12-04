import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Gallery } from "./gallery.entity";


@Injectable()
export class GalleryService{
    constructor(@InjectRepository(Gallery) private readonly newsRepository: Repository<Gallery>,){}
    // Создание записи в БД
    public async createGallery(galleryData: any){
        const galleryNew = await this.newsRepository.save({
            dateCreate: galleryData.createDate,
            dateUpdate: new Date(),
            galleryName: galleryData.name,
            author: galleryData.author,
            stateArchive: galleryData.stateArchive,
            satellitesId: galleryData.satellitesId,
            newsId: galleryData.newsId,
            
        })
        return await this.newsRepository.save(galleryNew);
    } 
}