import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { NewsCategoryService } from "./newsCategory.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateNewsCategoryDto} from "@entities/newsCategory/createNewsCategoryDto";

@ApiTags("категория новостей")
@Controller('newsCategory')
export class NewsCategoryController{
    constructor(
        private readonly newsServices: NewsCategoryService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение категории новостей. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание категории 
    @Post('/')
    @ApiOperation({ summary: 'Создание новости.' })
    @ApiBody({
        type: CreateNewsCategoryDto,
        examples: {
            default: {
                value: {
                    category: "название категории",
                    title: "заголовок"
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
    async createNews(@Req() req:Request, @Res() res: Response){
        const result = await this.newsServices.createCategory(req.body)
        return res.send(result)
    }
}