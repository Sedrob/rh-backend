import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { News } from './news.entity';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { AppService } from 'src/app.service';
import { ImageHashService } from '@entities/imageHash/imageHash.service';
import { ImageHash } from '@entities/imageHash/imageHash.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([ News, ImageHash ])],
    controllers: [NewsController],
    providers: [NewsService, AppService, ImageHashService]
})
export class NewsModule{}