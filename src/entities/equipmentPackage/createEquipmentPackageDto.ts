import {ApiProperty} from "@nestjs/swagger";

export class CreateEquipmentPackageDto{
    @ApiProperty({description: "ID экипировки", required: true})
    equipmentId: number

    @ApiProperty({description: "ID представления набора", required: true})
    viewPackageId: number
}