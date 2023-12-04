import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SummaryLectures } from './summaryLectures.entity';
import { SummaryLecturesController } from './summaryLectures.controller';
import { SummaryLecturesServices } from './summaryLectures.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ SummaryLectures ]),
  ],
  controllers: [ SummaryLecturesController ],
  providers: [  SummaryLecturesServices ],
})
export class SummaryLecturesModule {}
