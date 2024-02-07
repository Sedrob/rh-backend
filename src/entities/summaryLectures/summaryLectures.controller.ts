import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { SummaryLecturesServices } from "./summaryLectures.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("документация лекции")
@Controller('summaryLectures')
export class SummaryLecturesController{
    constructor(
        private readonly summaryLecturesServices: SummaryLecturesServices,
    ){}

    @Post('/')
    @ApiOperation({ summary: 'Создание документации лекции.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    docName: "название документа",
                    archive: false,
                    fileHash: "хэш файла",
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
        await this.summaryLecturesServices.createSummary(req.body)
        return res.send({status: 'ok'})
    }
    
}