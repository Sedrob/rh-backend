import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateSatellitesDto} from "@entities/satellites/createSatellitesDto";
import { CategorySatellitesService } from "./categorySatellites.service";

@ApiTags('категории спутника')
@Controller('categorySatellites')
export class CategorySatellitesController{
    constructor(
        private readonly categoryServices: CategorySatellitesService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение спутника. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getSatellites(@Req() req: Request, @Res() res: Response){
        const result = await this.categoryServices.getAllCategory()
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    } 

    @Post('/')
    // @ApiOperation({ summary: 'Создание спутника.' })
    // @ApiBody({
    //     type: CreateSatellitesDto,
    //     examples: {
    //         default: {
    //             value: {
    //                 name: "название",
    //                 title: "заголовок",
    //                 purpose: "цель",
    //                 objectiv: "задача",
    //                 target: "назначение",
    //                 dateOrbit: new Date(),
    //                 stateArchive: false,
    //             },
    //         },
    //     },
    // })
    // @ApiResponse({status: 201, description: 'создано', content: {
    //         'application/json' : {
    //             example: {
    //                 status: 'ok'
    //             }
    //         }
    //     }
    // })
    async createSatellites(@Req() req:Request, @Res() res: Response){
        const result = await this.categoryServices.createCategory(req.body)
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    }
}