import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Body } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Request, Response } from "express";
import { CreateUserDto } from "@entities/user/createUserDto";
import { AppService } from "src/app.service";

@ApiTags ('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
        private readonly appService: AppService 
    ) {
    }

    @Post('/login')
    async login(@Body() userData: CreateUserDto) {
        let result = await this.authService.login(userData)
        return this.appService.getSendReply('succes', 200, ' ', result)
    }

    @Post('/registration')
    async registration(@Body() userData: CreateUserDto) {
        let result = await this.authService.login(userData)
        return this.appService.getSendReply('succes', 200, ' ', result)
    }

}
