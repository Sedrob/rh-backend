import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { SatellitesService } from "./satellites.service";

@Controller('satellites')
export class SatellitesController{
    constructor(
        private readonly satellitesServices: SatellitesService,
    ){}

    @Get('/')
    async getSatellites(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 

    @Post('/')
    async createSatellites(@Req() req:Request, @Res() res: Response){
        await this.satellitesServices.createSatellites(req.body)
        return res.send({status: 'ok'})
    }
}