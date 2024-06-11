import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '@entities/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AppService } from 'src/app.service';
import { Tokens } from './token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entities/user/user.entity';


@Module({
  controllers: [AuthController],
  providers: [AuthService, AppService],
  imports: [
    TypeOrmModule.forFeature([ Tokens,  User]),
    UserModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET',
      signOptions:{
        expiresIn: '24h'
      }
    })
  ]
})
export class AuthModule {}
