import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './user.entity'
@Injectable()
export class UserServices{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,)
    {}

    public async createUser(userData: any){
        userData.role = 4 //Временное решение 
        const newUser = await this.userRepository.save({
            middleName: userData.middleName,
            firstName: userData.firstName,
            lastName: userData.lastName,
            password: userData.password,
            email: userData.email,
            pallada: userData.pallada,
            role: userData.role
        }) 
        return await this.userRepository.save(newUser) 
    }
    public async getUserData(id: any){
        console.log('id==', id)
        return await this.userRepository.findOne({where: {id}})
    }
    public async getAllUsers(userData: any){
        const users = await this.userRepository.find();
        return users;
    }
    public async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}})
        return user;
    }

    public async remove(id: string){
        const delUser = await this.userRepository.delete(id)
        console.log('delete user completed');
        return `delete user = ${id} completed`;

    }

}