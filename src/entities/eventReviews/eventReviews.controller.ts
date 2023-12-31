import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common";
import { Response, Request } from "express";
import { EventsReviewsService } from "./eventReviews.service";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("комментарии к событию")
@Controller('eventReviews')
export class EventsReviewsController{
    constructor(
        private readonly newsServices: EventsReviewsService,
    ){}

    @Get('/')
    @ApiOperation({ summary: 'Получение комментария к событию. В разработке.' })
    @ApiResponse({status: 200, description: "ok"})
    async getEvent(@Req() req: Request, @Res() res: Response){
        return res.send({status: 'ok'})
    }

    // Запрос на создание новости 
    @Post('/')
    @ApiOperation({ summary: 'Создание новости' })
    @ApiBody({
        type: undefined,
        examples: {
            default: {
                value: {
                    userId: 0,
                    eventsId: 0,
                    description: "описание",
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
        await this.newsServices.createReview(req.body)
        return res.send({status: 'ok'})
    }

    @Get('/count/:eventsId')
    @ApiOperation({ summary: 'Получение количества комментариев к событию по id события.' })
    @ApiResponse({status: 200, content: {
        'application/json' : {
            example: {
                count: 0
            }
        }
    }
    })
    async getAmountOfReviews(@Param('eventsId', new ParseIntPipe()) eventsId, @Res() res: Response){
        const result = await this.newsServices.getAmountOfReviewsByEventId(eventsId)
        return res.send(result);
    }
}