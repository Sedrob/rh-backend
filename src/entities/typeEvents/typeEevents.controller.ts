import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { TypeEventsService } from "./typeEvents.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("тип события")
@Controller('typeEvents')
export class TypeEventsController{
    constructor(
        private readonly newsServices: TypeEventsService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение типа события. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание типа события.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    name: "название",
                },
            },
        },
    })
    @ApiResponse({status: 201, description: 'создано', content: {
            'application/json' : {
                example: {
                    status: 'ok'
                }
            }
        }
    })
    async createEvent(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createType(req.body)
        return res.send({status: 'ok'})
    }
}