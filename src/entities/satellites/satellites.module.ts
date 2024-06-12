import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Satellites } from './satellites.entity';
import { SatellitesController } from './satellites.controller';
import { SatellitesService } from './satellites.service';
import { HttpModule } from '@nestjs/axios';
import { UrlSatellites } from './cteatingUrlSatellites';
import { AppService } from 'src/app.service';
import { CategorySatellites } from '@entities/categorySatellites/categorySatellites.entity';

@Module({
    imports: [ TypeOrmModule.forFeature([ Satellites, CategorySatellites ]), HttpModule],
    controllers: [SatellitesController],
    providers: [SatellitesService, UrlSatellites, AppService]
})
export class SatellitesModule{}