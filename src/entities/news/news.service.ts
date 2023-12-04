import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { News } from "./news.entity";


@Injectable()
export class NewsService{
    constructor(@InjectRepository(News) private readonly newsRepository: Repository<News>,){}
    // Создание записи нововсти в БД
    public async createNews(newsData: any){
        const newNews = await this.newsRepository.save({
            category: newsData.category,
            title: newsData.title,
            subtitle: newsData.subtitle,
            newsText: newsData.newsText,
            createDate: newsData.createDate,
            updateDate: new Date(),
            stateArchive: newsData.stateArchive,
            images: newsData.images,
            views: newsData.views,
            favouritos: newsData.favouritos,
            satellitesId: newsData.satellitesId,
            eventsId: newsData.eventsId,
            lecturesId: newsData.lecturesId,
            galleryId: newsData.galleryId
        })
        return await this.newsRepository.save(newNews);
    } 
}