import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OptionsPackage } from '@entities/options-package/options-package.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionsPackageService {
  constructor(@InjectRepository(OptionsPackage) private readonly optionsPackageRepository: Repository<OptionsPackage>) {}

  async create(optionsPackageData: any) {
    const newOptionsPackage = await this.optionsPackageRepository.save({
        packageId: optionsPackageData.packageId,
        optionId: optionsPackageData.optionId,
    });

    await this.optionsPackageRepository.save(newOptionsPackage);
  }
}
