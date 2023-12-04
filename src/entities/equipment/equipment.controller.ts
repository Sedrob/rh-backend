import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EquipmentService } from "./equipment.service";

@Controller('equipment')
export class EquipmentController{
    constructor(
        private readonly equipmentServices: EquipmentService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.equipmentServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}