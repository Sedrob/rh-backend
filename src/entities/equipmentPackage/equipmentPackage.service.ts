import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EquipmentPackage } from "./equipmentPackage.entity";


@Injectable()
export class EquipmentPackageService{
    constructor(@InjectRepository(EquipmentPackage) private readonly equipmentPackageRepository: Repository<EquipmentPackage>,){}
    // Создание записи в БД
    public async createEvent(equipmentData: any){
        const equipmentPackageNew = await this.equipmentPackageRepository.save({
            equipmentId: equipmentData.equipmentId,
            viewPackageId: equipmentData.viewPackageId,
        })
        return await this.equipmentPackageRepository.save(equipmentPackageNew);
    } 
}