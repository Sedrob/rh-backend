import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { LecturesService } from "./lectures.service";

@Controller('lectures')
export class LecturesController{
    constructor(
        private readonly lecturesServices: LecturesService,
    ){}

    @Get('/')
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание
    @Post('/')
    async createNews(@Req() req:Request, @Res() res: Response){
        await this.lecturesServices.createLectures(req.body)
        return res.send({status: 'ok'})
    }

    @Get('/archived')
    async getArchivedLectures(@Req() req: Request, @Res() res: Response){
        const result = await this.lecturesServices.getArchivedLectures()
        return res.send(result)
    }
}