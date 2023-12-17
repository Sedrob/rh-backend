import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { eventsRoles } from './eventsRoles.entity';
import { eventsRolesController } from './eventsRoles.controller';
import { eventsRolesService } from './eventsRoles.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ eventsRoles ]),],
    controllers: [ eventsRolesController],
    providers: [ eventsRolesService]
})
export class eventsRolesModule{}