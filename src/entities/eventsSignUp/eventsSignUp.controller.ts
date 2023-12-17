import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { signedUpService } from "./eventsSignUp.service";

@Controller('signedUp')
export class signedUpController{
    constructor(
        private readonly signedUpServices: signedUpService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.signedUpServices.createSignedUp(req.body)
        return res.send({status: 'ok'})
    }
}