import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { UserFavoritesNewsService } from "./userFavoritesNews.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("любимые новости пользователя")
@Controller('userFavoritesNews')
export class UserFavoritesNewsController {
    constructor(
        private readonly userServices: UserFavoritesNewsService,
    ){}

    @Post('/')
    @ApiOperation({ summary: 'Создание любимой новости пользователя.' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    userId: 0,
                    newsId: 0
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
    async createUserFavorites(@Req() req: Request, @Res() res: Response, ){
        
        await this.userServices.createFavorites(req.body)
        return res.send({status: 'ok'})
    }
}

