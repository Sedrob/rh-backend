import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Body, UnauthorizedException, HttpStatus } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Request, Response } from "express";
import { CreateUserDto } from "@entities/user/createUserDto";
import { AppService } from "src/app.service";
import { ConfigService } from "@nestjs/config";
import { Tokens } from "./token.entity";
import { request } from "http";
import { access } from "fs";


const REFRESH_TOKEN = 'token';

@ApiTags ('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
        private readonly appService: AppService,
        private readonly configService: ConfigService 
    ) {
    }

    @Get('/init')
    async init(@Req() req: Request, @Res() res:Response){
        const result = await this.authService.getInit(req.headers.authorization)
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    }

    @Post('/login')
    async login(@Body() userData: CreateUserDto, token: Tokens) {
        let result = await this.authService.login(userData)
        return this.appService.getSendReply('succes', 200, ' ', result)
    }

    @Post('/registration')
    async registration(@Body() userData: CreateUserDto) {
        let result = await this.authService.registration(userData)
        return this.appService.getSendReply('succes', 200, ' ', result)
    }
}
