import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Result } from '@entities/result/result.entity';

@Injectable()
export class ResultService {
  constructor(@InjectRepository(Result) private readonly resultRepository: Repository<Result>) {}

  async create(resultData: any) {
    const result = await this.resultRepository.save({
      name: resultData.name,
      description: resultData.description,
    });

    await this.resultRepository.save(result);
  }
}
