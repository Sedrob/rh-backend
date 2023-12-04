import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NewsCategory } from './newsCategory.entity';
import { NewsCategoryController } from './newsCategory.controller';
import { NewsCategoryService } from './newsCategory.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ NewsCategory ])],
    controllers: [NewsCategoryController],
    providers: [NewsCategoryService],
})
export class NewsCategoryModule{}