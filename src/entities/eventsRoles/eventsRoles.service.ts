import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { eventsRoles } from "./eventsRoles.entity";


@Injectable()
export class eventsRolesService{
    constructor(@InjectRepository(eventsRoles) private readonly newsRepository: Repository<eventsRoles>,){}
    // Создание записи в БД
    public async createEventsRoles(eventsData: any){
        const eventNew = await this.newsRepository.save({
            name: eventsData.name,
            decription: eventsData.decription,
        })
        return await this.newsRepository.save(eventNew);
    }
}