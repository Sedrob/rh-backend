import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeLectures } from './typeLectures.entity';
import { TypeLecturesController } from './typeLectures.controller';
import {TypeLecturesServices } from './typeLectures.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ TypeLectures ]),
  ],
  controllers: [ TypeLecturesController ],
  providers: [ TypeLecturesServices ],
})
export class TypeLecturesModule {}
