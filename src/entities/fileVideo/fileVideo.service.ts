import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Video } from "./fileVideo.entity";

@Injectable()
export class VideoServices{
    constructor(@InjectRepository(Video) private readonly videoRepository: Repository<Video>,){}

    public async createFileVideo(Date: any){
        const newFile = await this.videoRepository.save({
            docName: Date.docName,
            fileHash: Date.fileHash
        }) //создаем переменную с данными от контроллера
        return await this.videoRepository.save(newFile)
    }
}