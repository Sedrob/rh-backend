import {ApiProperty} from "@nestjs/swagger";

export class CreateEquipmentDto{
    @ApiProperty({ description: 'Название экипировки', required: false})
    readonly name: string;

    @ApiProperty({ description: 'Описание экипировки', required: false })
    readonly description: string;

    @ApiProperty({ description: 'Код объекта', required: true })
    readonly codeObject: string;

    @ApiProperty({ description: 'Id спутника', required: false })
    readonly satellitesId: number;
}