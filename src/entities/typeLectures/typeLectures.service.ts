import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { TypeLectures } from "./typeLectures.entity";

@Injectable()
export class TypeLecturesServices{
    constructor(@InjectRepository(TypeLectures) private readonly typeRepository: Repository<TypeLectures>,){}

    public async createTypeLectures(Date: any){
        const newType = await this.typeRepository.save({
            name: Date.name,
            description: Date.description
        }) //создаем переменную с данными от контроллера
        return await this.typeRepository.save(newType)
    }
}