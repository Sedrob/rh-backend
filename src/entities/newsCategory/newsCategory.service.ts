import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { NewsCategory } from "./newsCategory.entity";


@Injectable()
export class NewsCategoryService{
    constructor(@InjectRepository(NewsCategory) private readonly categotyRepository: Repository<NewsCategory>,){}
    // Создание записи нововсти в БД
    public async createCategory(categoryData: any){
        const newNews = await this.categotyRepository.save({
            category: categoryData.category,
            title: categoryData.title,
        })
        return await this.categotyRepository.save(newNews);
    } 
}