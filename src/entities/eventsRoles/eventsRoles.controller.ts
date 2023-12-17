import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { eventsRolesService } from "./eventsRoles.service";

@Controller('eventsRoles')
export class eventsRolesController{
    constructor(
        private readonly eventsRolesServices: eventsRolesService,
    ){}

    @Get('/')
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание новости 
    @Post('/')
    async createEventsRoles(@Req() req:Request, @Res() res: Response){
        await this.eventsRolesServices.createEventsRoles(req.body)
        return res.send({status: 'ok'})
    }
}