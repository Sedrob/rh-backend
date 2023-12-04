import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserFavoritesNews } from "./userFavoritesNews.entity";

 // services поставщик данных 
@Injectable()
export class UserFavoritesNewsService{ 
    constructor(@InjectRepository(UserFavoritesNews) private readonly userRepository: Repository<UserFavoritesNews>,)
    {

    }

    public async createFavorites(favData: any){
        
        const newFav = await this.userRepository.save({
            userId: favData.userId,
            newsId: favData.newsId
        })
        return await this.userRepository.save(newFav) // сохраняем данные переданные от контроллера 
    }
}