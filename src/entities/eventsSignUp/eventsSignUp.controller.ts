import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { signedUpService } from "./eventsSignUp.service";
import {ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("подписка на событие")
@Controller('signedUp')
export class signedUpController{
    constructor(
        private readonly signedUpServices: signedUpService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение подписки на событие' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание подписки на событие.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    singUser: 0,
                    roleId: 0,
                    eventsId: 0,
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
        await this.signedUpServices.createSignedUp(req.body)
        return res.send({status: 'ok'})
    }
}