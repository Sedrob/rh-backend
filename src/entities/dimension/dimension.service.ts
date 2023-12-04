import { Injectable } from '@nestjs/common';
import { Dimension } from '@entities/dimension/dimension.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DimensionService {

  constructor(
      @InjectRepository(Dimension) private readonly dimensionRepository: Repository<Dimension>,
  ) {}
  async create(dimensionData: any) {
    const newDimension = await this.dimensionRepository.save({
      name: dimensionData.name,
      description: dimensionData.description,
    });

    await this.dimensionRepository.save(newDimension);
  }
}
