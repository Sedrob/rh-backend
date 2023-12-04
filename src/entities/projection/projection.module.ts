import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Projection } from './projection.entity';
import { ProjectionController } from './projection.controller';
import { ProjectionService } from './projection.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ Projection ]),],
    controllers: [ ProjectionController],
    providers: [ ProjectionService]
})
export class ProjectiontModule{}