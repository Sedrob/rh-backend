import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Satellites } from "./satellites.entity";
import { UrlSatellites } from "./cteatingUrlSatellites"
import { CategorySatellites } from "@entities/categorySatellites/categorySatellites.entity";


@Injectable()
export class SatellitesService{
    constructor(@InjectRepository(Satellites) private readonly satellitesRepository: Repository<Satellites>,
                @InjectRepository(CategorySatellites) private readonly categoryRepository: Repository<CategorySatellites>,
                private url:UrlSatellites){}
    
    public async createSatellites(data: any){
        const newNews = await this.satellitesRepository.save({
            name: data.name,
            title: data.title,
            purpose: data.purpose,
            description: data.description,
            dateOrbit: new Date(),
            dateOut: data.dateOut,
            stateArchive: data.stateArchive,
        })
        return await this.satellitesRepository.save(newNews);
    } 

    public async getAllSatellites(){
        let category =  await this.satellitesRepository.find({
            select: ['id', 'name', 'title', 'purpose', 'description', 'dateOrbit', 'dateOut', 'stateArchive'],
        })

        return category
    }

    public async getDataSatellites(query: any){
        let vars = await this.url.createUrl(query)
        return vars
    }

    public async getCategory(){
        let category =  await this.categoryRepository.find({
            select: ['id', 'name', 'tag'],
        })
        return category
    }
}