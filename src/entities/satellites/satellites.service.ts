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

    public async processingData(data: any, queryParams: any){
        let nameCategory;
        let indicators = new Array;
        if (data["Result"]){
            nameCategory = await this.categoryRepository.findOne({
                select: ['name'],
                where: {tag : queryParams}
            })
        }
        else{
            nameCategory = "По выбранной дате данных нет"
        }
        for(let i = 0; i < Object.keys(data["Result"]).length; i++){
            let values = new Array
            for(let j = 0; j < Object.keys(data["Result"][i]).length; j++ ){
                values.push ({
                    date: Object.entries(data["Result"][i][j]).map(([key, val]) => {return val})[0],
                    value: Object.entries(data["Result"][i][j]).map(([key, val]) => {return val})[1]
                });
            }
            indicators.push({tag: Object.entries(data["Result"][i][0]).map(([key]) => {return key})[1],
                data: values.map(item => {return {date: item.date, value: item.value}})
            })
        }
        return { name: nameCategory.name, indicators: Array.from(indicators)}
    }
}