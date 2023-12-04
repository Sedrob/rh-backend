import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Satellites } from './satellites.entity';
import { SatellitesController } from './satellites.controller';
import { SatellitesService } from './satellites.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ Satellites ]),],
    controllers: [SatellitesController],
    providers: [SatellitesService]
})
export class SatellitesModule{}