import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { PresentationServices } from "./presentation.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreatePresentationDto} from "@entities/presentation/createPresentationDto";

@ApiTags('презентация')
@Controller('presentation')
export class PresentationController{
    constructor(
        private readonly presentationServices: PresentationServices,
    ){}

    @Post('/')
    @ApiOperation({ summary: 'Создание презентации.' })
    @ApiBody({
        type: CreatePresentationDto,
        examples: {
            default: {
                value: {
                    docName: "название",
                    fileHash: "хэш"
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
    async createRoles(@Req() req: Request, @Res() res: Response, ){
        await this.presentationServices.createPresentation(req.body)
        return res.send({status: 'ok'})
    }
    
}