import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { ViewPackageService } from "./viewPackage.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateViewPackageDto} from "@entities/viewPackage/createViewPackageDto";

@ApiTags("представление набора")
@Controller('viewPackage')
export class ViewPackageController{
    constructor(
        private readonly viewPackageServices: ViewPackageService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение представления набора. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание
    @Post('/')
    @ApiOperation({ summary: 'Создание наборов и представлений.' })
    @ApiBody({
        type: CreateViewPackageDto,
        examples: {
            default: {
                value: {
                    namePackage: "название набора"
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
        await this.viewPackageServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}