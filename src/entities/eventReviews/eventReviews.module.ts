import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventsReviews } from './eventReviews.entity';
import { EventsReviewsController } from './eventReviews.controller';
import { EventsReviewsService } from './eventReviews.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ EventsReviews ]),],
    controllers: [ EventsReviewsController],
    providers: [ EventsReviewsService]
})
export class EventsReviewsModule{}