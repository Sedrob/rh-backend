import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { StateEventsService } from "./stateEvents.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateStateEventDto} from "@entities/stateEvents/createStateEventDto";

@ApiTags('состояние события')
@Controller('stateEvents')
export class StateEventsController{
    constructor(
        private readonly newsServices: StateEventsService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение состояния события. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание состояния события.' })
    @ApiBody({
        type: CreateStateEventDto,
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
        await this.newsServices.createState(req.body)
        return res.send({status: 'ok'})
    }
}