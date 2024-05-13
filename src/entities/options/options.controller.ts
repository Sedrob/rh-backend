import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { OptionsService } from './options.service';
import { Request, Response } from 'express';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateOptionDto} from "@entities/options/createOptionDto";

@ApiTags("опции")
@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  @ApiOperation({ summary: 'Создание опции.' })
  @ApiBody({
    type: CreateOptionDto,
    examples: {
      default: {
        value: {
          nameOptions: "название",
          description: "описание",
          objectOptions: "опции объекта",
          dimensionId: 0,
          resultId: 0,
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
  public async create(@Req() req: Request, @Res() res: Response) {
    await this.optionsService.create(req.body);
    return res.send({ status: 'ok' });
  }
}
