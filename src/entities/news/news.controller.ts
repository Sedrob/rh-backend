import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, UploadedFile } from "@nestjs/common";
import { Response, Request, Express } from "express";
import { NewsService } from "./news.service";
import {ApiBody, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateNewsDto} from "@entities/news/createNewsDto";
import { AppService } from "src/app.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { fileStorage } from "@entities/imageHash/storage";

@ApiTags('новости')
@Controller('news')
export class NewsController{
    constructor(
        private readonly newsServices: NewsService,
        private readonly appService: AppService
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
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
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
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    }

    // Запрос на создание новости 
    @Post('/')
    @UseInterceptors(FileInterceptor('file', {storage: fileStorage}))
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
    async createNews(@Req() req:Request, @Res() res: Response, @UploadedFile() file: Express.Multer.File){
        const result = await this.newsServices.createNews(req.body, file)
        return res.send(this.appService.getSendReply('succes', 200, ' ', result))
    }

    @Delete('/:id')
    @ApiOperation({ summary: 'удаление новости' })
    @ApiParam({name: 'id', description: "id новости"})
    @ApiResponse({status: 200, description: 'удалено', content: {
            'application/json' : {
                example: {
                    status: 'ok'
                }
            }
        }
    })
    async deleteNews(@Param('id', new ParseIntPipe()) id: number, @Res() res: Response){
        let message = await this.newsServices.deleteNews(id)
        return res.send(this.appService.getSendReply('succes', 200, message))
    }
}