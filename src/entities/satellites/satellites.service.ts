import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Satellites } from "./satellites.entity";


@Injectable()
export class SatellitesService{
    constructor(@InjectRepository(Satellites) private readonly newsRepository: Repository<Satellites>,){}
    // Создание записи нововсти в БД
    public async createSatellites(data: any){
        const newNews = await this.newsRepository.save({
            name: data.name,
            title: data.title,
            purpose: data.purpose,
            objectiv: data.objectiv,
            target: data.target,
            dateOrbit: data.dateOrbit,
            dateOut: new Date(),
            stateArchive: data.stateArchive,
        })
        return await this.newsRepository.save(newNews);
    } 
}