import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { NewsService } from "./news.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateNewsDto} from "@entities/news/createNewsDto";

@ApiTags('новости')
@Controller('news')
export class NewsController{
    constructor(
        private readonly newsServices: NewsService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение всех новостей' })
    @ApiResponse({status: 200, content: {
            'application/json' : {
                example: [
                    {
                        title: "заголовк",
                        newsText: "текст новости",
                        createDate: new Date(),
                        views: 0,
                        category: {
                            id: 0,
                            category: "категория",
                            stateArchive: false
                        },
                        images: {
                            id: 0,
                            imageName: "название изображения",
                            description: "описание",
                            fileHash: "хэш"
                        }
                    }
                ]
            }
        }
    })
    async getNews(@Req() req: Request, @Res() res: Response){
        const result = await this.newsServices.getAllNews()
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Получение новости по id' })
    @ApiResponse({status: 200, content: {
            'application/json' : {
                example: {
                    id: 0,
                    title: "заголовк",
                    subtitle: "подзаголовок",
                    newsText: "текст новости",
                    createDate: new Date(),
                    views: 7500,
                    category: {
                        id: 0,
                        category: "категория",
                        stateArchive: false
                    },
                    images: {
                        id: 0,
                        imageName: "название изображения",
                        description: "описание",
                        fileHash: "хэш файла"
                    },
                    satellitesId: {
                        id: 0,
                        name: "название",
                        title: "заголовок",
                        purpose: "цель",
                        objectiv: "задача",
                        target: "цель",
                        dateOrbit: new Date(),
                        dateOut: new Date(),
                        stateArchive: false
                    }
                }
            }
        }
    })
    async getNewsById(@Param('id', new ParseIntPipe()) id, @Res() res: Response){
        const result = await this.newsServices.getNewsById(id)
        return res.send({
            status: 'success',
            code: 200,
            message: '',
            data: result
        })
    }

    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание новости' })
    @ApiBody({
        type: CreateNewsDto,
        examples: {
            default: {
                value: {
                    category: 0,
                    title: "заголовк",
                    subtitle: "подзаголовк",
                    newsText: "текст новости",
                    createDate: new Date(),
                    stateArchive: false,
                    images: 0,
                    views: 0,
                    favouritos: 0,
                    satellitesId: 0,
                    eventsId: 0,
                    lecturesId: 0,
                    galleryId: 0
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
        const result = await this.newsServices.createNews(req.body)
        return res.send({
            status: 'success',
            code: 201,
            message: '',
            data: result
        })
    }
}