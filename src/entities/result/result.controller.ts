import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { ResultService } from './result.service';
import { Request, Response } from 'express';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    await this.resultService.create(req.body);
    return res.send({ status: 'ok' });
  }
}
