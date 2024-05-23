import { Module } from '@nestjs/common';
import { AppController } from '@entities/app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './config.module';
import { TypeOrmModule } from './db/typeorm.module';
import { UserModule } from './entities/user/user.module';
import { RoleModule } from '@entities/role/role.module';
import { NewsModule } from '@entities/news/news.module';
import { UserFavoritesNewsModule } from '@entities/userFavoritesNews/userFavoritesNews.module';
import { NewsCategoryModule } from '@entities/newsCategory/newsCategory.module';
import { ImageGalleryModule } from '@entities/imageGallery/imageGallery.module';
import { ImageHashModule } from '@entities/imageHash/imageHash.module';
import { GalleryModule } from '@entities/gallery/gallery.module';
import { AuthModule } from 'src/auth/auth.module';
import { EventsModule } from '@entities/events/events.module';
import { EventsReviewsModule } from '@entities/eventReviews/eventReviews.module';
import { StateEventsModule } from '@entities/stateEvents/stateEvents.module';
import { TypeEventsModule } from '@entities/typeEvents/typeEvents.module';
import { LecturesModule } from '@entities/lectures/lectures.module';
import { SummaryLecturesModule } from '@entities/summaryLectures/summaryLectures.module';
import { PresentationModule } from '@entities/presentation/presentation.module';
import { VideoModule } from '@entities/fileVideo/fileVideo.module';
import { TypeLecturesModule } from '@entities/typeLectures/typeLectures.module';
import { eventsRolesModule } from '@entities/eventsRoles/eventsRoles.module';
import { signedUpModule } from '@entities/eventsSignUp/eventsSignUp.module';
import { CategorySatellitesModule } from '@entities/categorySatellites/categorySatellites.module';
import { SatellitesModule } from '@entities/satellites/satellites.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule,
    UserModule,
    RoleModule,
    NewsModule,
    NewsCategoryModule,
    UserFavoritesNewsModule,
    GalleryModule,
    ImageGalleryModule,
    ImageHashModule,
    AuthModule,
    EventsModule,
    EventsReviewsModule,
    StateEventsModule,
    TypeEventsModule, 
    LecturesModule,
    SummaryLecturesModule, 
    PresentationModule, 
    VideoModule, 
    TypeLecturesModule, 
    eventsRolesModule,
    signedUpModule,
    CategorySatellitesModule,
    SatellitesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
