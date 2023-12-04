import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { SummaryLecturesServices } from "./summaryLectures.service";

@Controller('summaryLectures')
export class SummaryLecturesController{
    constructor(
        private readonly summaryLecturesServices: SummaryLecturesServices,
    ){}

    @Post('/')
    async createRoles(@Req() req: Request, @Res() res: Response, ){
        await this.summaryLecturesServices.createSummary(req.body)
        return res.send({status: 'ok'})
    }
    
}