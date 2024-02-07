import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { signedUp } from './eventsSignUp.entity';
import { signedUpController } from './eventsSignUp.controller';
import { signedUpService } from './eventsSignUp.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ signedUp ]),],
    controllers: [ signedUpController],
    providers: [ signedUpService]
})
export class signedUpModule{}