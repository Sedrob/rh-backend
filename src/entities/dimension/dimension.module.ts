import { Module } from '@nestjs/common';
import { DimensionService } from './dimension.service';
import { DimensionController } from './dimension.controller';
import { Dimension } from "@entities/dimension/dimension.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Dimension])],
  controllers: [DimensionController],
  providers: [DimensionService],
})
export class DimensionModule {}
