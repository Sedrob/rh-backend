import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '@entities/options/option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OptionsService {

  constructor(@InjectRepository(Option) private readonly optionRepository: Repository<Option>) {}

  async create(optionData: any) {
    const newOption = await this.optionRepository.save({
        nameOptions: optionData.nameOptions,
        description: optionData.description,
        objectOptions: optionData.objectOptions,
        dimensionId: optionData.dimensionId,
        resultId: optionData.resultId,
    })

    await this.optionRepository.save(newOption);
  }
}
