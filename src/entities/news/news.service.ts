import {BadRequestException, Inject, Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { News } from "./news.entity";
import {ImageGalleryService} from "@entities/imageGallery/imageGallery.service";


@Injectable()
export class NewsService{
    constructor(@InjectRepository(News) private readonly newsRepository: Repository<News>){}
    // Создание записи нововсти в БД
    public async createNews(newsData: any){
        
        this.validateNewsRequest(newsData)
        
        const newNews = await this.newsRepository.save({
            category: newsData.category,
            title: newsData.title,
            subtitle: newsData.subtitle,
            newsText: newsData.newsText,
            createDate: new Date(),
            updateDate: new Date(),
            images: newsData.images,
            views: 0,
            favouritos: 0,
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
            select: ['id', 'title', 'newsText', 'category', 'createDate', 'views', 'images', 'stateArchive'],
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
                'satellitesId',
                'stateArchive'],
            where: {id: id},
            relations: ['category', 'images', 'satellitesId']
        })
    }
    

    public async deleteNews(id: number)
    {
        const news = await this.newsRepository.findOne({where : {id: id}})
        if (news.stateArchive)
        {
            throw new BadRequestException(`news with id ${id} is already archived`)
        }
        news.stateArchive = true
        
        await this.newsRepository.save(news)

        return `Удаление новости id = ${id} прошло успешно`
    }
  
    private validateNewsRequest(newsData: any)
    {
        if (newsData.newsText === null || newsData.category === null || newsData.title === undefined)
        {
            throw new BadRequestException("`newsData`, `category`, `title` fields are required")
        }
    }
}