import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config' //установил через npm i @nest/config --save 


@Module({
  imports: [
    NestConfigModule.forRoot({isGlobal:true}),
  ]
})
export class ConfigModule {}