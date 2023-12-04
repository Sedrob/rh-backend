import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { ViewPackageService } from "./viewPackage.service";

@Controller('viewPackage')
export class ViewPackageController{
    constructor(
        private readonly viewPackageServices: ViewPackageService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.viewPackageServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}