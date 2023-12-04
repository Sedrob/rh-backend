import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EquipmentPackageService } from "./equipmentPackage.service";

@Controller('equipmentPackage')
export class EquipmentPackageController{
    constructor(
        private readonly equipmentPackageServices: EquipmentPackageService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.equipmentPackageServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}