import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EquipmentPackage } from './equipmentPackage.entity';
import { EquipmentPackageController } from './equipmentPackage.controller';
import { EquipmentPackageService } from './equipmentPackage.service';

@Module({
    imports: [ TypeOrmModule.forFeature([ EquipmentPackage ]),],
    controllers: [ EquipmentPackageController],
    providers: [ EquipmentPackageService]
})
export class EquipmentPackageModule{}