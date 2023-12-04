import { Module } from '@nestjs/common';
import { OptionsPackageService } from './options-package.service';
import { OptionsPackageController } from './options-package.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionsPackage } from '@entities/options-package/options-package.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OptionsPackage])],
  controllers: [OptionsPackageController],
  providers: [OptionsPackageService],
})
export class OptionsPackageModule {}
