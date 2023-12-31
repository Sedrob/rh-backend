import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EventsService } from "./events.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("событие")
@Controller('events')
export class EventsController{
    constructor(
        private readonly newsServices: EventsService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение события.' })
    @ApiResponse({status: 200, content: {
        'application/json' : {
            example: [
                {
                    name: "name",
                    subtitle: "subtitile",
                    dateStart: "2023-12-08T12:14:09.000Z",
                    dateEnd: "2023-12-08T12:14:10.000Z",
                    newsId: {
                        id: 2,
                        title: "title",
                        subtitle: "subtitle",
                        newsText: "text",
                        createDate: "2023-12-08T12:20:25.000Z",
                        updateDate: "2023-12-08T12:20:27.000Z",
                        stateArchive: false,
                        views: 1,
                        favouritos: null,
                        eventsId: null,
                        lecturesId: null,
                        galleryId: 1
                    },
                    eventsType: null
                }
            ]
        }
        }})
    async getEvent(@Req() req: Request, @Res() res: Response){
        const events = await this.newsServices.getAllEvents()
        return res.send(events)
    }

    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание события' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    name: "name",
                    subtitle: "subtitle",
                    description: "description",
                    newsId: 0,
                    userCreateId: 0,
                    eventsState: 0,
                    eventsType: 0,
                    delete: false,
                    satellitesId: 0,
                    dateStart: new Date(),
                    dateEnd: new Date()
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
        await this.newsServices.createEvent(req.body)
        return res.send({status: 'ok'})
    }
}