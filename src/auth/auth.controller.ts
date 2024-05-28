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
    login(@Body() userData: CreateUserDto) {
        return this.appService.getSendReply('succes', 200, ' ', this.authService.login(userData))
    }

    @Post('/registration')
    registration(@Body() userData: CreateUserDto) {
        return this.appService.getSendReply('succes', 200, ' ', this.authService.login(userData))
    }

}
