import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { DimensionService } from './dimension.service';
import { Request, Response } from "express";

@Controller('dimensions')
export class DimensionController {
  constructor(private readonly dimensionService: DimensionService) {}

  @Post()
  public async create(@Req() req: Request, @Res() res: Response) {
    await this.dimensionService.create(req.body);
    return res.send({ status: 'ok' });
  }
}
