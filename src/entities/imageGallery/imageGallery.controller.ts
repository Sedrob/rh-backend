import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { ImageGalleryService } from "./imageGallery.service";

@Controller('imageGallery')
export class ImageGalleryController{
    constructor(
        private readonly imageGalleryServices: ImageGalleryService,
    ){}

    @Get('/')
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createImageGallery(@Req() req:Request, @Res() res: Response){
        await this.imageGalleryServices.createImageGalleryServices(req.body)
        return res.send({status: 'ok'})
    }
}