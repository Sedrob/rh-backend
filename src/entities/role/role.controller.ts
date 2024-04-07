import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { UserRoleServices } from "./role.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateRoleDto} from "@entities/role/createRoleDto";

@ApiTags('роль')
@Controller('roles')
export class UserRoleController{
    constructor(
        private readonly userRoleServices: UserRoleServices,
    ){}

    @Post('/')
    @ApiOperation({ summary: 'Создание роли.' })
    @ApiBody({
        type: CreateRoleDto,
        examples: {
            default: {
                value: {
                    name: "название",
                    decription: "описание",
                    code: "код",
                    test: "test",
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
        await this.userRoleServices.createRole(req.body)
        return res.send({status: 'ok'})
    }
}