import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CategorySatellites } from "./categorySatellites.entity";


@Injectable()
export class CategorySatellitesService{
    constructor(@InjectRepository(CategorySatellites) private readonly categoryRepository: Repository<CategorySatellites>,){}
    
    public async createCategory(data: any){
        const newNews = await this.categoryRepository.save({
            name: data.name,
            tag: data.tag,
            satellites: data.satellites,
        })
        return await this.categoryRepository.save(newNews);
    } 

    public async getAllCategory(){
        
        let category =  await this.categoryRepository.find({
            select: ['id', 'name', 'tag', 'satellites'],
            relations: ['satellites']
        })

        return category
    }
}