import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ImageHash } from "./imageHash.entity";


@Injectable()
export class ImageHashService{
    constructor(@InjectRepository(ImageHash) private readonly newsRepository: Repository<ImageHash>,){}
    // Создание записи в БД
    public async createImage(ImageData: any){
        const galleryNew = await this.newsRepository.save({
            imageName: ImageData.imageName,
            description: ImageData.description,
            fileHash: ImageData.fileHash,
        })
        return await this.newsRepository.save(galleryNew);
    } 
}