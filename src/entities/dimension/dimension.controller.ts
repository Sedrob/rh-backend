import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { DimensionService } from './dimension.service';
import { Request, Response } from "express";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateDimensionDto} from "@entities/dimension/createDimensionDto";

@ApiTags('измерение')
@Controller('dimensions')
export class DimensionController {
  constructor(private readonly dimensionService: DimensionService) {}

  @Post()
  @ApiOperation({ summary: 'Создание измерения' })
  @ApiBody({
    type: CreateDimensionDto,
    examples: {
      default: {
        value: {
          name: 'имя',
          description: 'описание',
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
    await this.dimensionService.create(req.body);
    return res.send({ status: 'ok' });
  }
}
