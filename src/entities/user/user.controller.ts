import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";

import { UserServices } from "./user.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "@entities/user/createUserDto";
import { AppService } from "src/app.service";

@ApiTags("пользователь")
@Controller('users')
export class UserController {
    constructor(
        private readonly userServices: UserServices,
        private readonly appService: AppService
    ){}


    @Get('/') // '/' - выглядит как users/
    @ApiOperation({summary: "Получение всех пользователей. В разработке."})
    async getAllUsers(@Req() req: Request, @Res() res: Response, ){
        const result = await this.userServices.getAllUsers(req.body)
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    }

    @Get('/:id') // ':' - парам забирается из url
    @ApiOperation({ summary: 'Получение пользователя по id.' })
    @ApiResponse({status: 201, description: 'создано', content: {
            'application/json' : {
                example: {
                    status: "ok",
                    data: {
                        id: 0,
                        middleName: "имя",
                        firsName: "фамилия",
                        lastName: "отчество",
                        post: null,
                        email: "электронная почта",
                        pallada: null
                    }
                }
            }
        }
    })
    async getUsers(@Req() req: Request, @Res() res: Response, @Param("id",ParseIntPipe) id: number){ // ParseIntPipe - Сделать получение данных int 
        const result = await this.userServices.getUserData(id)

        delete result.password //Убрать вывод строки 
        return res.send(this.appService.getSendReply('succes', 200, ' ', result)) //Получаем id пользователя 
    }

    @Get('/users') // '/' - выглядит как users/
    @ApiOperation({ summary: 'Получение всех пользователей.' })
    @ApiResponse({status: 201, description: 'создано', content: {
            'application/json' : {
                example: {
                    status: 'ok'
                }
            }
        }
    })
    async getAll(@Req() req: Request, @Res() res: Response, ){
        const result = this.userServices.getAllUsers(req.body)
        return res.send(this.appService.getSendReply('succes', 200, ' ', result));
    }

    @Post('/')
    //@UseInterceptors(FileInterceptor('')) // перехватываем файлы и данные
    @ApiOperation({ summary: 'Создание пользователя.' })
    @ApiBody({
        type: CreateUserDto,
        examples: {
            default: {
                value: {
                    middleName: "имя",
                    firsName: "фамилия",
                    lastName: "отчество",
                    password: "пароль",
                    email: "электронная почта",
                    pallada: 0,
                    roles: 0
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
    async createUser(@Req() req: Request, @Res() res: Response, ){

        const result = await this.userServices.createUser(req.body)
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    }

    @Post('/user/delete')
    @ApiOperation({ summary: 'удаление пользователя по id. id передается по ключу email.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    id: 0
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
    async registration(@Req() req: Request, @Res() res: Response, ) {
        let message = await  this.userServices.remove(req.body)

        return res.send(this.appService.getSendReply('succes', 200, message))
    }
}

