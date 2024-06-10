import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Body, UnauthorizedException, HttpStatus } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Request, Response } from "express";
import { CreateUserDto } from "@entities/user/createUserDto";
import { AppService } from "src/app.service";
import { ConfigService } from "@nestjs/config";
import { Tokens } from "./token.entity";


const REFRESH_TOKEN = 'token';

@ApiTags ('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
        private readonly appService: AppService,
        private readonly configService: ConfigService 
    ) {
    }

    @Post('/login')
    async login(@Body() userData: CreateUserDto, @Res() res: Response, token: Tokens) {
        let result = await this.authService.login(userData)
        res.cookie(REFRESH_TOKEN,result, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 21 * 24 * 60 * 60 * 1000,
            // secure: this.configService.get('NODE_ENV', 'development') === 'production',
            path: '/',
        })
        res.status(HttpStatus.CREATED).json(Tokens)

        // this.setRefreshTikenToCookies(res)
        return this.appService.getSendReply('succes', 200, ' ', result)
        // return res.send(this.appService.getSendReply('succes', 200, ' ', result));
    }

    @Post('/registration')
    async registration(@Body() userData: CreateUserDto) {
        let result = await this.authService.registration(userData)
        return this.appService.getSendReply('succes', 200, ' ', result)
    }

    // @Get('refresh-tokens')
    // async

    // private setRefreshTikenToCookies(token: Tokens, res: Response) {
    //     res.cookie(REFRESH_TOKEN, token.token, {
    //         httpOnly: true,
    //         sameSite: 'lax',
    //         maxAge: 21 * 24 * 60 * 60 * 1000,
    //         // secure: this.configService.get('NODE_ENV', 'development') === 'production',
    //         path: '/',
    //     })
    //     res.status(HttpStatus.CREATED).json(Tokens)
    // }
    

}
