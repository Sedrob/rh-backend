import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorySatellitesController } from './categorySatellites.controller';
import { CategorySatellitesService } from './categorySatellites.service';
import { CategorySatellites } from './categorySatellites.entity';



@Module({
    imports: [ TypeOrmModule.forFeature([ CategorySatellites ]),],
    controllers: [CategorySatellitesController],
    providers: [CategorySatellitesService]
})
export class CategorySatellitesModule{}