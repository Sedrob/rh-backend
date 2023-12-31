import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { ProjectionService } from "./projection.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("проектирование")
@Controller('projection')
export class ProjectionController{
    constructor(
        private readonly projectionServices: ProjectionService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение проектирования. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание
    @Post('/')
    @ApiOperation({ summary: 'Создание проектирования.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    name: "название",
                    description: "описание",
                    image: "изображение",
                    archive: false,
                    equipmentId: 0
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
        await this.projectionServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}