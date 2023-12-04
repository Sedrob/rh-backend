import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule} from '@nestjs/typeorm' //установил через npm install @nestjs/typeorm --save
import { ConfigModule } from '../config.module';
import { ConfigService } from '@nestjs/config'; // отуда же откуда и ConfigModule


@Module({
    imports: [
        NestTypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_DATABASE'),
                entities: [ 'dist/entities/**/*.entity.js' ],
                synchronize: true, // включает отключает изменение entities(Таблицы) в прямом виде, т.е. если true все изменения идут в БД false не идут 

            }),
            inject: [ConfigService], //Чтобы работал get
      })
    ]
})

export class TypeOrmModule {}
