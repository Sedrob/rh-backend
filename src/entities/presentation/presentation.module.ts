import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Presentation } from './presentation.entity';
import { PresentationController } from './presentation.controller';
import { PresentationServices } from './presentation.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ Presentation ]),
  ],
  controllers: [ PresentationController ],
  providers: [  PresentationServices ],
})
export class PresentationModule {}
