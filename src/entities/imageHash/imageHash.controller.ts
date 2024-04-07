import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";

import { ImageHashService } from "./imageHash.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateImageHashDto} from "@entities/imageHash/createImageHashDto";

@ApiTags("хэш изображения")
@Controller('image_hash')
export class ImageHashController{
    constructor(
        private readonly newsServices: ImageHashService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение хэша изображения. В разработке.' })
    @ApiResponse({status: 200, description: "ок"})
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание хэша изображения.' })
    @ApiBody({
        type: CreateImageHashDto,
        examples: {
            default: {
                value: {
                    imageName: "имя изображения",
                    description: "описание",
                    fileHash: "хэш изображения",
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
    async createNews(@Req() req:Request, @Res() res: Response){
        await this.newsServices.createImage(req.body)
        return res.send({status: 'ok'})
    }
}