import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EventsReviewsService } from "./eventReviews.service";

@Controller('eventReviews')
export class EventsReviewsController{
    constructor(
        private readonly newsServices: EventsReviewsService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createReview(req.body)
        return res.send({status: 'ok'})
    }

    @Get('/count/:eventsId')
    async getAmountOfReviews(@Param('eventsId', new ParseIntPipe()) eventsId, @Res() res: Response){
        const result = await this.newsServices.getAmountOfReviewsByEventId(eventsId)
        return res.send(result);
    }
}