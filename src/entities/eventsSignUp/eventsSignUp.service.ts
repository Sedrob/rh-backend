import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { signedUp } from "./eventsSignUp.entity";


@Injectable()
export class signedUpService{
    constructor(@InjectRepository(signedUp) private readonly newsRepository: Repository<signedUp>,){}
    // Создание записи в БД
    public async createSignedUp(eventsData: any){
        const eventNew = await this.newsRepository.save({
            singUser: eventsData.singUser,
            roleId: eventsData.roleId,
            dateCreate: new Date(),
            eventsId: eventsData.eventsId,
        })
        return await this.newsRepository.save(eventNew);
    }
}