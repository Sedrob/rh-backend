import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EquipmentService } from "./equipment.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateEquipmentDto} from "@entities/equipment/createEquipmentDto";

@ApiTags('экипировка')
@Controller('equipment')
export class EquipmentController{
    constructor(
        private readonly equipmentServices: EquipmentService,
    ){}

    @Get('/')
    @ApiOperation({ summary: "Получение экипировки. В разработке." })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание экипировки' })
    @ApiBody({
        type: CreateEquipmentDto,
        examples: {
            default: {
                value: {
                    name: "имя",
                    description: "описание",
                    satellitesId: 0,
                    codeObject: "ключевой объект"
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
        await this.equipmentServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}