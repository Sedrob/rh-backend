import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";

import { UserServices } from "./user.service";

@Controller('users')
export class UserController {
    constructor(
        private readonly userServices: UserServices,
    ){}


    @Get('/') // '/' - выглядит как users/
    async getAllUsers(@Req() req: Request, @Res() res: Response, ){

    }

    @Get('/:id') // ':' - парам забирается из url  
    async getUsers(@Req() req: Request, @Res() res: Response, @Param("id",ParseIntPipe) id: number){ // ParseIntPipe - Сделать получение данных int 
        const userData = await this.userServices.getUserData(id)

        delete userData.password //Убрать вывод строки 
        return res.send({status: 'ok', data: userData}) //Получаем id пользователя 
    }

    @Post('/') // ':' - парам забирается из url  
    //@UseInterceptors(FileInterceptor('')) // перехватываем файлы и данные
    async createUser(@Req() req: Request, @Res() res: Response, ){
        
        await this.userServices.createUser(req.body)
        return res.send({status: 'ok'})
    }
}

