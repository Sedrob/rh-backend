import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { StateEventsService } from "./stateEvents.service";

@Controller('stateEvents')
export class StateEventsController{
    constructor(
        private readonly newsServices: StateEventsService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createState(req.body)
        return res.send({status: 'ok'})
    }
}