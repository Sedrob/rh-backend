import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserRole } from "./role.entity";

@Injectable()
export class UserRoleServices{
    constructor(@InjectRepository(UserRole) private readonly RoleRepository: Repository<UserRole>,){}

    public async createRole(roleDate: any){
        const newRole = await this.RoleRepository.save({
            name: roleDate.name,
            decription: roleDate.decription,
            code: roleDate.code,
            test: roleDate.test,
        }) //создаем переменную с данными от контроллера
        return await this.RoleRepository.save(newRole)
    }
}