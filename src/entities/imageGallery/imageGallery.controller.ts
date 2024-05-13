import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { ImageGalleryService } from "./imageGallery.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateImageGalleryDto} from "@entities/imageGallery/createImageGalleryDto";

@ApiTags("фотография галереи")
@Controller('imageGallery')
export class ImageGalleryController{
    constructor(
        private readonly imageGalleryServices: ImageGalleryService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение фотографии галереи. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'create user' })
    @ApiBody({
        type: CreateImageGalleryDto,
        examples: {
            default: {
                value: {
                    imageId: 0,
                    galleryId: 0
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
    async createImageGallery(@Req() req:Request, @Res() res: Response){
        await this.imageGalleryServices.createImageGalleryServices(req.body)
        return res.send({status: 'ok'})
    }
}