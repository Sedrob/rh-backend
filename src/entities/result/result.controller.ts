import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { ResultService } from './result.service';
import { Request, Response } from 'express';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("результат")
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  @ApiOperation({ summary: 'Создание результата.' })
  @ApiBody({
    type: undefined,
    examples: {
      default: {
        value: {
          name: "название",
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
  async create(@Req() req: Request, @Res() res: Response) {
    await this.resultService.create(req.body);
    return res.send({ status: 'ok' });
  }
}
