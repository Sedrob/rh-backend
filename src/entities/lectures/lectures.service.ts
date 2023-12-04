import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Lectures } from "./lectures.entity";


@Injectable()
export class LecturesService{
    constructor(@InjectRepository(Lectures) private readonly lecturesRepository: Repository<Lectures>,){}
    // Создание записи
    public async createLectures(lecturesData: any){
        const newLectures = await this.lecturesRepository.save({
            title: lecturesData.title,
            subtitle: lecturesData.subtitle,
            description: lecturesData.description,
            createDate: new Date(),
            updateDate: new Date(),
            stateArchive: lecturesData.stateArchive,
            lectureSummaryId: lecturesData.lectureSummaryId,
            presentitionId: lecturesData.presentitionId,
            lictureVideoId: lecturesData.lictureVideoId,
            satellitesId: lecturesData.satellitesId,
            newsId: lecturesData.newsId,
            typeLectures: lecturesData.typeLectures
        })
        return await this.lecturesRepository.save(newLectures);
    } 
}