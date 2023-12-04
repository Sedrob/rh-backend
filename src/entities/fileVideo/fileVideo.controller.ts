import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { VideoServices } from "./fileVideo.service";

@Controller('video')
export class VideoController{
    constructor(
        private readonly videoServices: VideoServices,
    ){}

    @Post('/')
    async createFileVideo(@Req() req: Request, @Res() res: Response, ){
        await this.videoServices.createFileVideo(req.body)
        return res.send({status: 'ok'})
    }
    
}