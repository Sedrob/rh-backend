import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { TypeEvents } from "./typeEvents.entity";


@Injectable()
export class TypeEventsService{
    constructor(@InjectRepository(TypeEvents) private readonly newsRepository: Repository<TypeEvents>,){}
    // Создание записи в БД
    public async createType(Data: any){
        const typeNew = await this.newsRepository.save({
            name: Data.name,
        })
        return await this.newsRepository.save(typeNew);
    } 
}