import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ImageHash } from "./imageHash.entity";


@Injectable()
export class ImageHashService{
    constructor(@InjectRepository(ImageHash) private readonly imageRepository: Repository<ImageHash>,){}
    // Создание записи в БД
    public async createImage(file: Express.Multer.File){
        const galleryNew = await this.imageRepository.save({
            imageName: file.originalname,
            description: file.mimetype,
            fileHash: file.filename,
        })
        return await this.imageRepository.save(galleryNew);
    } 
}