import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { SummaryLectures } from "./summaryLectures.entity";

@Injectable()
export class SummaryLecturesServices{
    constructor(@InjectRepository(SummaryLectures) private readonly lecturesRepository: Repository<SummaryLectures>,){}

    public async createSummary(Date: any){
        const newRole = await this.lecturesRepository.save({
            docName: Date.docName,
            archive: Date.archive,
            fileHash: Date.fileHash,
        }) //создаем переменную с данными от контроллера
        return await this.lecturesRepository.save(newRole)
    }
}