import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StateEvents } from './stateEvents.entity';
import { StateEventsController } from './stateEevents.controller';
import { StateEventsService } from './stateEvents.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ StateEvents ]),],
    controllers: [ StateEventsController],
    providers: [ StateEventsService]
})
export class StateEventsModule{}