import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Query } from "@nestjs/common";
import { Response, Request, response, query } from "express";
import { SatellitesService } from "./satellites.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateSatellitesDto} from "@entities/satellites/createSatellitesDto";
import { HttpService } from "@nestjs/axios";
import { AppService } from "src/app.service";

@ApiTags('спутник')
@Controller('satellites')
export class SatellitesController{
    constructor(
        private readonly satellitesServices: SatellitesService,
        private readonly HttpService: HttpService,
        private readonly appService: AppService
    ){}
    @Get('/')
    @ApiOperation({ summary: 'Получение спутника. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getSatellites(@Req() req: Request, @Res() res: Response){
        const result = await this.satellitesServices.getAllSatellites() 
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    } 

    @Get('/dataSend')
    async getDataSatellites(){
        return 'There will be a sending to the post email'//this.HttpService.axiosRef.get(url1).then((response) => response.data);
    }

    @Get('/data')
    @ApiOperation({summary: 'Составление запроса на сервер спутника', description: 'Ожидаемые теги и значения в url '})
    @ApiResponse({description: "Json с массивом данных"})
    @ApiBody({type: String, examples: { default: {value: {
            DateFrom: "Дата в формате 'DateFrom=2024-03-01T00:00:00'",
            DateTo: "Дата в формате 'DateTo=2024-05-01T00:00:00'",
            parameters: "Категории в формате 'parameters=TempB1,TempB2,CAKB'"
        }
    }}})
    async getDataSatellitesSend(@Query() query: string){
        const url = await this.satellitesServices.getDataSatellites(query)
        // console.log(url)
        return this.HttpService.axiosRef.get(url).then((response) => response.data);
    }

    @Post('/')
    @ApiOperation({ summary: 'Создание спутника.' })
    @ApiBody({
        type: CreateSatellitesDto,
        examples: {
            default: {
                value: {
                    name: "название",
                    title: "заголовок",
                    purpose: "цель",
                    objectiv: "задача",
                    target: "назначение",
                    dateOrbit: new Date(),
                    stateArchive: false,
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
    async createSatellites(@Req() req:Request, @Res() res: Response){
        const result = await this.satellitesServices.createSatellites(req.body)
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    }
}