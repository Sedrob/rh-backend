import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { GalleryService } from "./gallery.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('галерея')
@Controller('gallery')
export class GalleryController{
    constructor(
        private readonly newsServices: GalleryService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получения галереи' })
    @ApiResponse({status: 200, description: "ok"})
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание галереи
    @Post('/')
    @ApiOperation({ summary: 'Создание галереи' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    dateCreate: new Date(),
                    galleryName: "имя галереи",
                    author: "автор",
                    stateArchive: false,
                    satellitesId: 0,
                    newsId: 0,
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
        await this.newsServices.createGallery(req.body)
        return res.send({status: 'ok'})
    }
}