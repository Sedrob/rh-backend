import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EventsReviews } from "./eventReviews.entity";


@Injectable()
export class EventsReviewsService{
    constructor(@InjectRepository(EventsReviews) private readonly newsRepository: Repository<EventsReviews>,){}
    // Создание записи в БД
    public async createReview(Data: any){
        const eventNew = await this.newsRepository.save({
            userId: Data.userId,
            eventsId: Data.eventsId,
            dateCreate: new Date(),
            description: Data.description,
        })
        return await this.newsRepository.save(eventNew);
    } 
}