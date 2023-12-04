import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Projection } from "./projection.entity";


@Injectable()
export class ProjectionService{
    constructor(@InjectRepository(Projection) private readonly projectionRepository: Repository<Projection>,){}
    // Создание записи в БД
    public async createEvent(projectionData: any){
        const projectionNew = await this.projectionRepository.save({
            name: projectionData.name,
            description: projectionData.description,
            image: projectionData.image,
            archive: projectionData.archive,
            equipmentId: projectionData.equipmentId
        })
        return await this.projectionRepository.save(projectionNew);
    } 
}