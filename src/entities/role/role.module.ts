import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRole } from './role.entity';
import { UserRoleController } from './role.controller';
import { UserRoleServices } from './role.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ UserRole ]),
  ],
  controllers: [ UserRoleController ],
  providers: [  UserRoleServices ],
})
export class RoleModule {}
