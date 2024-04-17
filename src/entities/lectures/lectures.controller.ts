import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { LecturesService } from "./lectures.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateLectureDto} from "@entities/lectures/createLectureDto";

@ApiTags("лекции")
@Controller('lectures')
export class LecturesController{
    constructor(
        private readonly lecturesServices: LecturesService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение лекций. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getNews(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    } 
    // Запрос на создание
    @Post('/')
    @ApiOperation({ summary: 'Создание лекции' })
    @ApiBody({
        type: CreateLectureDto,
        examples: {
            default: {
                value: {
                    title: "заголовок",
                    subtitle: "подзаголовок",
                    description: "описание",
                    stateArchive: false,
                    lectureSummaryId: 0,
                    presentitionId: 0,
                    lictureVideoId: 0,
                    satellitesId: 0,
                    newsId: 0,
                    typeLectures: 0
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
        await this.lecturesServices.createLectures(req.body)
        return res.send({status: 'ok'})
    }

    @Get('/archived')
    @ApiOperation({ summary: 'Получение лекций, у которых stateArchive == true' })
    @ApiResponse({status: 200, content: {
            'application/json' : {
                example: [
                    {
                        title: "заголовок",
                        subtitle: "подзаголовок",
                        description: "описание",
                        createDate: new Date(),
                        typeLectures: {
                            id: 1,
                            name: "название",
                            description: "описание"
                        }
                    }
                ],
            }
        }
    })
    async getArchivedLectures(@Req() req: Request, @Res() res: Response){
        const result = await this.lecturesServices.getArchivedLectures()
        return res.send(result)
    }

    @Get('/all')
    @ApiOperation({ summary: 'Получение всех лекций.' })
    @ApiResponse({status: 200, content: {
            'application/json' : {
                example: [
                    {
                        title: "заголовок",
                        subtitle: "подзаголовок",
                        description: "описание",
                        createDate: new Date(),
                        typeLectures: {
                            id: 1,
                            name: "название",
                            description: "описание"
                        }
                    }
                ],
            }
        }
    })
    async getAllLectures(@Req() req: Request, @Res() res: Response){
        const result = await this.lecturesServices.getAllLectures()
        return res.send(result)
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Получение лекции по id.' })
    @ApiResponse({status: 200, content: {
            'application/json' : {
                example: {
                        id: 1,
                        title: "заголовок",
                        subtitle: "подзаголовок",
                        description: "описание",
                        createDate: "2023-12-08T14:33:13.000Z",
                        updateDate: "2023-12-08T14:33:14.000Z",
                        stateArchive: false,
                        lectureSummaryId: {
                            id: 1,
                            docName: "название",
                            archive: true,
                            fileHash: "хэш"
                        },
                        presentitionId: {
                            id: 1,
                            docName: "название",
                            fileHash: "хэш"
                        },
                        lictureVideoId: {
                            id: 1,
                            docName: "название",
                            fileHash: "хэш"
                        }
                }
            }
        }
    })
    async getLectureById(@Param('id', new ParseIntPipe()) id, @Res() res: Response){
        const result = await this.lecturesServices.getLecture(id)
        return res.send(result)
    }
}