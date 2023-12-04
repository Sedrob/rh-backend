import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { GalleryService } from "./gallery.service";

@Controller('gallery')
export class GalleryController{
    constructor(
        private readonly newsServices: GalleryService,
    ){}

    @Get('/')
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createNews(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createGallery(req.body)
        return res.send({status: 'ok'})
    }
}