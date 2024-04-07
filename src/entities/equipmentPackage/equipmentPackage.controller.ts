import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EquipmentPackageService } from "./equipmentPackage.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateEquipmentPackageDto} from "@entities/equipmentPackage/createEquipmentPackageDto";

@ApiTags('набор экипировки')
@Controller('equipmentPackage')
export class EquipmentPackageController{
    constructor(
        private readonly equipmentPackageServices: EquipmentPackageService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение набора экипировки. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание набора экипировки' })
    @ApiBody({
        type: CreateEquipmentPackageDto,
        examples: {
            default: {
                value: {
                    equipmentId: 0,
                    viewPackageId: 0,
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
        await this.equipmentPackageServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}