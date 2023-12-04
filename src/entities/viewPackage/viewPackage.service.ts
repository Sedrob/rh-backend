import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ViewPackage } from "./viewPackage.entity";


@Injectable()
export class ViewPackageService{
    constructor(@InjectRepository(ViewPackage) private readonly viewPackageRepository: Repository<ViewPackage>,){}
    // Создание записи в БД
    public async createEvent(packageData: any){
        const packageNew = await this.viewPackageRepository.save({
            namePackage: packageData.namePackage
        })
        return await this.viewPackageRepository.save(packageNew);
    } 
}