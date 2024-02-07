import {Inject, Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { News } from "./news.entity";
import {ImageGalleryService} from "@entities/imageGallery/imageGallery.service";


@Injectable()
export class NewsService{
    constructor(@InjectRepository(News) private readonly newsRepository: Repository<News>){}
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

    public async getAllNews()
    {
        let news =  await this.newsRepository.find({
            select: ['title', 'newsText', 'category', 'createDate', 'views', 'images'],
            relations: ['category' ,'images']
        })

        // news.forEach((item) => {
        //     const images = item.images.fileHash
        //     if (images !== null && images.length > 1)
        //     {
        //         item.images.fileHash = fileHash
        //     }
        //     else
        //     {

        //     }
        // })

        return news
    }

    public async getNewsById(id: number): Promise<News>
    {
        return await this.newsRepository.findOne({
            select: [
                'id',
                'title',
                'subtitle',
                'newsText',
                'createDate',
                'views',
                'category',
                'images',
                'satellitesId'],
            where: {id: id},
            relations: ['category', 'images', 'satellitesId']
        })
    }
}