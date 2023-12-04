import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Equipment } from "./equipment.entity";


@Injectable()
export class EquipmentService{
    constructor(@InjectRepository(Equipment) private readonly equipmentRepository: Repository<Equipment>,){}
    // Создание записи в БД
    public async createEvent(equipmentData: any){
        const equipmentNew = await this.equipmentRepository.save({
            name: equipmentData.name,
            description: equipmentData.description,
            satellitesId: equipmentData.satellitesId,
            codeObject: equipmentData.codeObject
        })
        return await this.equipmentRepository.save(equipmentNew);
    } 
}