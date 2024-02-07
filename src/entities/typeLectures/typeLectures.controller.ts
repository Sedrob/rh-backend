import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { TypeLecturesServices } from "./typeLectures.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("тип лекций")
@Controller('typeLectures')
export class TypeLecturesController{
    constructor(
        private readonly typeLecturesServices: TypeLecturesServices,
    ){}

    @Post('/')
    @ApiOperation({ summary: 'Создание типа лекции.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    name: "название",
                    description: "описание"
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
    async createTypeLectures(@Req() req: Request, @Res() res: Response, ){
        await this.typeLecturesServices.createTypeLectures(req.body)
        return res.send({status: 'ok'})
    }
    
}