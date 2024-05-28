import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '@entities/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AppService } from 'src/app.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService, AppService],
  imports: [
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
