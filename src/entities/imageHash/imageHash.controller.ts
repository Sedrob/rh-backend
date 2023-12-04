import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";

import { ImageHashService } from "./imageHash.service";

@Controller('image_hash')
export class ImageHashController{
    constructor(
        private readonly newsServices: ImageHashService,
    ){}

    @Get('/')
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createNews(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createImage(req.body)
        return res.send({status: 'ok'})
    }
}