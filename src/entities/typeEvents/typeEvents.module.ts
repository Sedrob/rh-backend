import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeEvents } from './typeEvents.entity';
import { TypeEventsController } from './typeEevents.controller';
import { TypeEventsService } from './typeEvents.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ TypeEvents ]),],
    controllers: [ TypeEventsController],
    providers: [ TypeEventsService]
})
export class TypeEventsModule{}