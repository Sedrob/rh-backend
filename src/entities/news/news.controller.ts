import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { NewsService } from "./news.service";

@Controller('news')
export class NewsController{
    constructor(
        private readonly newsServices: NewsService,
    ){}

    @Get('/')
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createNews(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createNews(req.body)
        return res.send({status: 'ok'})
    }
}