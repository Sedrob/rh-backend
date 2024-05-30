import {BadRequestException, Injectable} from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Events } from "./events.entity";


@Injectable()
export class EventsService{
    constructor(@InjectRepository(Events) private readonly newsRepository: Repository<Events>,){}
    // Создание записи в БД
    public async createEvent(eventsData: any){
        const eventNew = await this.newsRepository.save({
            name: eventsData.name,
            subtitle: eventsData.subtitle,
            dateCreate: new Date(),
            dateUpdate: new Date(),
            description: eventsData.description,
            newsId: eventsData.newsId,
            userCreateId: eventsData.userCreateId,
            eventsState: eventsData.eventsState,
            eventsType: eventsData.eventsType,
            satellitesId: eventsData.satellitesId,
            dateStart: eventsData.dateStart,
            dateEnd: eventsData.dateEnd
        })
        return await this.newsRepository.save(eventNew);
    }

    public async getAllEvents()
    {
        return await this.newsRepository.find({
            select: ['id' ,'name', 'subtitle', 'dateStart', 'dateEnd', 'newsId', 'eventsType'],
            relations: ['newsId', 'eventsType']
        });
    }
    
    public async deleteEvent(id: number)
    {
        const event = await this.newsRepository.findOne({where : {id: id}})
        
        if (event.delete)
        {
            throw new BadRequestException(`event with id ${id} is already deleted`)
        }
        
        event.delete = true
        
        await this.newsRepository.save(event)
        
        return `Мероприятие ${id} занесено в архив`
    }
}