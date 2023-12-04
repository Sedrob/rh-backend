import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { NewsCategoryService } from "./newsCategory.service";

@Controller('newsCategory')
export class NewsCategoryController{
    constructor(
        private readonly newsServices: NewsCategoryService,
    ){}

    @Get('/')
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание категории 
    @Post('/')
    async createNews(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createCategory(req.body)
        return res.send({status: 'ok'})
    }
}