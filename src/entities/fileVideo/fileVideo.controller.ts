import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { VideoServices } from "./fileVideo.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateFileVideoDto} from "@entities/fileVideo/createFileVideoDto";

@ApiTags("файл и видео")
@Controller('video')
export class VideoController{
    constructor(
        private readonly videoServices: VideoServices,
    ){}

    @Post('/')
    @ApiOperation({ summary: 'Создание файла и видео' })
    @ApiBody({
        type: CreateFileVideoDto,
        examples: {
            default: {
                value: {
                    docName: "docname",
                    fileHash: "filehash"
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
    async createFileVideo(@Req() req: Request, @Res() res: Response, ){
        await this.videoServices.createFileVideo(req.body)
        return res.send({status: 'ok'})
    }
    
}