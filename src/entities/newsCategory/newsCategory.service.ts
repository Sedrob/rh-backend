import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { NewsCategory } from "./newsCategory.entity";


@Injectable()
export class NewsCategoryService{
    constructor(@InjectRepository(NewsCategory) private readonly newsRepository: Repository<NewsCategory>,){}
    // Создание записи нововсти в БД
    public async createCategory(categoryData: any){
        const newNews = await this.newsRepository.save({
            category: categoryData.category,
            title: categoryData.title,
        })
        return await this.newsRepository.save(newNews);
    } 
}