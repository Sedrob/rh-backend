import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { PackageService } from './package.service';
import { Request, Response } from "express";
import {ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("набор")
@Controller('package')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Post()
  @ApiOperation({ summary: 'Создание набора.' })
  @ApiBody({
    type: undefined,
    examples: {
      default: {
        value: {
          responseDate: new Date(),
          viewPackageId: 0,
          result: "результат"
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
    await this.packageService.create(req.body);

    return res.send({ status: 'ok' });
  }
}
