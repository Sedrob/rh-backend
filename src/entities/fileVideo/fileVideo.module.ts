import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Video } from './fileVideo.entity';
import { VideoController } from './fileVideo.controller';
import { VideoServices } from './fileVideo.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Video ]),
  ],
  controllers: [ VideoController ],
  providers: [ VideoServices ],
})
export class VideoModule {}
