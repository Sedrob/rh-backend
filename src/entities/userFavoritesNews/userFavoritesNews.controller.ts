import { Controller, Delete, Get, Post, Req, Res, Put, Patch, UseInterceptors, Param, ParseIntPipe } from "@nestjs/common"; //UseInterceptors - перехватчик 
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { UserFavoritesNewsService } from "./userFavoritesNews.service";


@Controller('userFavoritesNews')
export class UserFavoritesNewsController {
    constructor(
        private readonly userServices: UserFavoritesNewsService,
    ){}

    @Post('/')
    async createUserFavorites(@Req() req: Request, @Res() res: Response, ){
        
        await this.userServices.createFavorites(req.body)
        return res.send({status: 'ok'})
    }
}

