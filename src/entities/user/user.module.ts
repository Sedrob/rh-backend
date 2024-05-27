import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user.entity'
import { UserController } from './user.controller';
import { UserServices } from './user.service';
import { AppService } from 'src/app.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([ User ]),
  ],
  controllers: [ UserController ],
  providers: [ UserServices ],
  exports: [UserServices, AppService],
})
export class UserModule {}
