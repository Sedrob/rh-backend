import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { eventsRolesService } from "./eventsRoles.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateEventRoleDto} from "@entities/eventsRoles/createEventRoleDto";

@ApiTags("роли в событии")
@Controller('eventsRoles')
export class eventsRolesController{
    constructor(
        private readonly eventsRolesServices: eventsRolesService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение роли в событии. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание роли в событии.' })
    @ApiBody({
        type: CreateEventRoleDto,
        examples: {
            default: {
                value: {
                    name: "имя",
                    decription: "описание",
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
    async createEventsRoles(@Req() req:Request, @Res() res: Response){
        const result = await this.eventsRolesServices.createEventsRoles(req.body)
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    }
}