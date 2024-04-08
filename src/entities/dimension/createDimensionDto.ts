import {ApiProperty} from "@nestjs/swagger";

export class CreateDimensionDto
{
    @ApiProperty({ description: 'Название измерения' })
    readonly name: string;

    @ApiProperty({ description: 'Описание измерения' })
    readonly description: string;
}