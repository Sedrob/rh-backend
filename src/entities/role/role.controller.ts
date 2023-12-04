import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe, } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { UserRoleServices } from "./role.service";

@Controller('roles')
export class UserRoleController{
    constructor(
        private readonly userRoleServices: UserRoleServices,
    ){}

    @Post('/')
    async createRoles(@Req() req: Request, @Res() res: Response, ){
        await this.userRoleServices.createRole(req.body)
        return res.send({status: 'ok'})
    }
    
}