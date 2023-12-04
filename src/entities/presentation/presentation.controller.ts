import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { PresentationServices } from "./presentation.service";

@Controller('presentation')
export class PresentationController{
    constructor(
        private readonly presentationServices: PresentationServices,
    ){}

    @Post('/')
    async createRoles(@Req() req: Request, @Res() res: Response, ){
        await this.presentationServices.createPresentation(req.body)
        return res.send({status: 'ok'})
    }
    
}