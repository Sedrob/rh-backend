import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { TypeEventsService } from "./typeEvents.service";

@Controller('typeEvents')
export class TypeEventsController{
    constructor(
        private readonly newsServices: TypeEventsService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createType(req.body)
        return res.send({status: 'ok'})
    }
}