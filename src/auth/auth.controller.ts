import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Body } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Request, Response } from "express";
import { CreateUserDto } from "@entities/user/createUserDto";

@ApiTags ('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('/login')
    login(@Body() userData: CreateUserDto) {
        return this.authService.login(userData)
    }

    @Post('/registration')
    registration(@Body() userData: CreateUserDto) {
        return this.authService.registration(userData)
    }

}
