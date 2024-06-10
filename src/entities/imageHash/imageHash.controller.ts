import { Controller, Get, Post, Req, Res,UseInterceptors, UploadedFile } from "@nestjs/common";
import { Response, Request, Express } from "express";
import { ImageHashService } from "./imageHash.service";
import {ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import { CreateImageHashDto } from "@entities/imageHash/createImageHashDto";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileStorage } from "./storage";

@ApiTags("хэш изображения")
@Controller('image_hash')
export class ImageHashController{
    constructor(
        private readonly imageServices: ImageHashService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение хэша изображения. В разработке.' })
    @ApiResponse({status: 200, description: "ок"})
    async getImages(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание новости 
    @Post('/')
    @UseInterceptors(FileInterceptor('file', {storage: fileStorage}))
    @ApiOperation({ summary: 'Создание хэша изображения.' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                   type: 'string',
                   format: 'binary',
                },
            },
        }, 
    })
    async createImage(@UploadedFile() file: Express.Multer.File){
        const result = await this.imageServices.createImage(file)
        return result
    }
}