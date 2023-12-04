import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Presentation } from "./presentation.entity";

@Injectable()
export class PresentationServices{
    constructor(@InjectRepository(Presentation) private readonly lecturesRepository: Repository<Presentation>,){}

    public async createPresentation(Date: any){
        const newRole = await this.lecturesRepository.save({
            docName: Date.docName,
            fileHash: Date.fileHash
        }) //создаем переменную с данными от контроллера
        return await this.lecturesRepository.save(newRole)
    }
}