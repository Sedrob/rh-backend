import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { OptionsPackageService } from './options-package.service';
import { Request, Response } from 'express';
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateOptionsPackageDto} from "@entities/options-package/createOptionsPackageDto";

@ApiTags("опции и наборы")
@Controller('options_package')
export class OptionsPackageController {
  constructor(private readonly optionsPackageService: OptionsPackageService) {}

  @Post()
  @ApiOperation({ summary: 'Создание опций и наборов.' })
  @ApiBody({
    type: CreateOptionsPackageDto,
    examples: {
      default: {
        value: {
          packageId: 0,
          optionId: 0,
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
    await this.optionsPackageService.create(req.body);

    return res.send({ status: 'ok' });
  }
}
