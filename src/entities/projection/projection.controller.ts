import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { ProjectionService } from "./projection.service";

@Controller('projection')
export class ProjectionController{
    constructor(
        private readonly projectionServices: ProjectionService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.projectionServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}