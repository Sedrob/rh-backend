import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EventsService } from "./events.service";

@Controller('events')
export class EventsController{
    constructor(
        private readonly newsServices: EventsService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        const events = await this.newsServices.getAllEvents()
        return res.send(events)
    }

    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}