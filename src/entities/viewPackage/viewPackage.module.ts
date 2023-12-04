import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ViewPackage } from './viewPackage.entity';
import { ViewPackageController } from './viewPackage.controller';
import { ViewPackageService } from './viewPackage.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ ViewPackage ]),],
    controllers: [ ViewPackageController],
    providers: [ ViewPackageService]
})
export class ViewPackageModule{}