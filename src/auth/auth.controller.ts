import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Request, Response } from "express";

@ApiTags ('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('/login')
    login(@Req() req: Request, @Res() res: Response) {
        return this.authService.login(req.body)

    }

    @Post('/registration')
    registration(@Req() req: Request, @Res() res: Response, ) {
        return this.authService.registration(req.body)

    }

}
