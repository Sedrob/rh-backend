import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lectures} from './lectures.entity';
import { LecturesController } from './lectures.controller';
import { LecturesService } from './lectures.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ Lectures ]),],
    controllers: [LecturesController],
    providers: [LecturesService]
})
export class LecturesModule{}