import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { OptionsPackageService } from './options-package.service';
import { Request, Response } from 'express';

@Controller('options_package')
export class OptionsPackageController {
  constructor(private readonly optionsPackageService: OptionsPackageService) {}

  @Post()
  public async create(@Req() req: Request, @Res() res: Response) {
    await this.optionsPackageService.create(req.body);

    return res.send({ status: 'ok' });
  }
}
