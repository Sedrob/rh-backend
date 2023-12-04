import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { OptionsService } from './options.service';
import { Request, Response } from 'express';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  public async create(@Req() req: Request, @Res() res: Response) {
    await this.optionsService.create(req.body);
    return res.send({ status: 'ok' });
  }
}
