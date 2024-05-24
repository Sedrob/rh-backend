import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Query } from "@nestjs/common";
import { Response, Request, response, query } from "express";
import { SatellitesService } from "./satellites.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateSatellitesDto} from "@entities/satellites/createSatellitesDto";
import { HttpService } from "@nestjs/axios";

const url1 = "http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempB1,TempB2,CAKB&key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ";
const url3 = "http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempB1&key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ";
const url2 = "http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempB1&key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ";
const url4 = "http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempB1&key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ"
@ApiTags('спутник')
@Controller('satellites')
export class SatellitesController{
    constructor(
        private readonly satellitesServices: SatellitesService,
        private readonly HttpService: HttpService,
    ){}
    @Get('/')
    @ApiOperation({ summary: 'Получение спутника. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getSatellites(@Req() req: Request, @Res() res: Response){
        const result = await this.satellitesServices.getAllSatellites() 
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    } 

    @Get('/data')
    async getDataSatellites(){
        return this.HttpService.axiosRef.get(url1).then((response) => response.data);
    }

    @Get('/dataSend')
    async getDataSatellitesSend(@Query() query: string){
        const url = await this.satellitesServices.getDataSatellites(query)
        console.log(url)
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
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    }
}