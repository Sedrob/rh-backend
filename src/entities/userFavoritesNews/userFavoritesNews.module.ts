import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserFavoritesNews } from './userFavoritesNews.entity';
import { UserFavoritesNewsController } from './userFavoritesNews.controller';
import { UserFavoritesNewsService } from './userFavoritesNews.service';


@Module({
  imports: [TypeOrmModule.forFeature([ UserFavoritesNews ]),],
  controllers: [ UserFavoritesNewsController ],
  providers: [ UserFavoritesNewsService ],
})
export class UserFavoritesNewsModule {}
