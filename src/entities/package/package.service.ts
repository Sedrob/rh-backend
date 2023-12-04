import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Package } from "@entities/package/package.entity";
import { Repository } from "typeorm";

@Injectable()
export class PackageService {
  constructor(@InjectRepository(Package) private readonly packageRepository: Repository<Package>) {
  }
  async create(packageData: any) {
    const newPackage = await this.packageRepository.save({
      responseDate: packageData.responseDate,
      viewPackageId: packageData.viewPackageId,
      result: packageData.result
    });

    await this.packageRepository.save(newPackage);
  }
}
