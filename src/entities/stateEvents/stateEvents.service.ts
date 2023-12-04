import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { StateEvents } from "./stateEvents.entity";


@Injectable()
export class StateEventsService{
    constructor(@InjectRepository(StateEvents) private readonly newsRepository: Repository<StateEvents>,){}
    // Создание записи в БД
    public async createState(Data: any){
        const stateNew = await this.newsRepository.save({
            name: Data.name,
        })
        return await this.newsRepository.save(stateNew);
    } 
}