import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { TypeLecturesServices } from "./typeLectures.service";

@Controller('typeLectures')
export class TypeLecturesController{
    constructor(
        private readonly typeLecturesServices: TypeLecturesServices,
    ){}

    @Post('/')
    async createTypeLectures(@Req() req: Request, @Res() res: Response, ){
        await this.typeLecturesServices.createTypeLectures(req.body)
        return res.send({status: 'ok'})
    }
    
}