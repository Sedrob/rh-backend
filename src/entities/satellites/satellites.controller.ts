import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, Query } from "@nestjs/common";
import { Response, Request, response, query } from "express";
import { SatellitesService } from "./satellites.service";
import {ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateSatellitesDto} from "@entities/satellites/createSatellitesDto";
import { HttpService } from "@nestjs/axios";
import { AppService } from "src/app.service";
import {PdfService} from "../../common/PdfService";

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
    @ApiParam({name: 'DateFrom, DateTo, parameters', description: "пример запроса 'DateFrom=2024-01-01T00:00:00&'", type: Date})
    @ApiParam({name: 'DateTo', description: "DateTo=2024-05-31T23:59:59&", type: Date})
    @ApiParam({name: 'parameters',description: "parameters=TempSQL", type: String})
    async getDataSatellites(@Query() query: string, @Res() res: Response){
        const url = await this.satellitesServices.getDataSatellites(query)
        const data = await this.HttpService.axiosRef.get(url).then((response) => response.data);
        const result = new PdfService().generatePfgFile(data)

        res.set({
            'Content-Type': 'application/octet-stream',
            'Content-Length': result.byteLength,
            'Content-Disposition': 'inline; filename=data.pdf'
        }).send(Buffer.from(result));
    }

    @Get('/data')
    @ApiOperation({summary: 'Составление запроса на сервер спутника', description: 'итоговый путь в url ?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempSQL'})
    @ApiResponse({description: "Json с массивом данных"})
    @ApiParam({name: 'DateFrom, DateTo, parameters', description: "пример запроса 'DateFrom=2024-01-01T00:00:00&'", type: Date})
    @ApiParam({name: 'DateTo', description: "DateTo=2024-05-31T23:59:59&", type: Date})
    @ApiParam({name: 'parameters',description: "parameters=TempSQL", type: String})
    async getDataSatellitesSend(@Query() query: string, @Res() res:Response){
        const url = await this.satellitesServices.getDataSatellites(query)
        const urlData = await this.HttpService.axiosRef.get(url).then((response) => response.data);
        const result = await this.satellitesServices.processingData(urlData, query["parameters"])
        return res.send(this.appService.getSendReply('succes', 200, ' ', result));
    }

    @Get('/category')
    @ApiOperation({summary: 'Получение данных о категориях'})
    @ApiResponse({content: {
        'json': { example: {
            id: 1,
            name: "Температура солнечного датчика",
            tag: "TempSQL"
        }}
    }})
    async getCategorySatellites(@Res() res:Response){
        const result = await this.satellitesServices.getCategory()
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
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