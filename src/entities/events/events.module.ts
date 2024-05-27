import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Events } from './events.entity';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { AppService } from 'src/app.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ Events ]),],
    controllers: [ EventsController],
    providers: [ EventsService, AppService ]
})
export class EventsModule{}