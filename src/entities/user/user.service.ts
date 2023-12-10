import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './user.entity'
// services поставщик данных
@Injectable()
export class UserServices{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,)
    {

    }

    public async createUser(userData: any){
        // const newUser = await this.userRepository.findOne({
        //     where: {
        //         email: userData.email
        //     }
        // })
        // if (newUser) throw new ('Уже есть')//создаем переменную с данными от контроллера ПРОВЕРКА НА РЕГИСТРАЦИЮ 
        const newUser = await this.userRepository.save({
            middleName: userData.middleName,
            firsName: userData.firsName,
            lastName: userData.lastName,
            password: userData.password,
            email: userData.email,
            pallada: userData.pallada,
            roles: userData.roles
        }) //создаем переменную с данными от контроллера
        return await this.userRepository.save(newUser) // сохраняем данные переданные от контроллера
    }
//Получаем Юзера
    public async getUserData(id: any){
        console.log('id==', id)
        return await this.userRepository.findOne({where: {id}})
        //return await this.userRepository.save(newUser) // сохраняем данные переданные от контроллера
    }
    public async getAllUsers(userData: any){
        const users = await this.userRepository.find();
        return users;
    }
    public async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}})
        return user;
    }

    public async remove(userData: any){
        const delUser = await this.userRepository.delete(userData.email)
        console.log('delete user completed');
        return delUser;

    }

}