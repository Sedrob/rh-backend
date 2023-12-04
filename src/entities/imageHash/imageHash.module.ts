import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageHash } from './imageHash.entity';
import { ImageHashController } from './imageHash.controller';
import { ImageHashService } from './imageHash.service';


@Module({
    imports: [ TypeOrmModule.forFeature([ ImageHash ]),],
    controllers: [ ImageHashController ],
    providers: [ ImageHashService ]
})
export class ImageHashModule{}