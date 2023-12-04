import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageGallery } from './imageGallery.entity';
import { ImageGalleryController } from './imageGallery.controller';
import { ImageGalleryService } from './imageGallery.service';



@Module({
    imports: [ TypeOrmModule.forFeature([ ImageGallery ]),],
    controllers: [ ImageGalleryController ],
    providers: [ ImageGalleryService ]
})
export class ImageGalleryModule{}