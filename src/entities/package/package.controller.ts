import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res } from "@nestjs/common";
import { PackageService } from './package.service';
import { Request, Response } from "express";

@Controller('package')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Post()
  async create(@Req() req: Request, @Res() res: Response) {
    await this.packageService.create(req.body);

    return res.send({ status: 'ok' });
  }
}
