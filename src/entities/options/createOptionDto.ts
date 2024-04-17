import {ApiProperty} from "@nestjs/swagger";

export class CreateOptionDto
{
    @ApiProperty({description: "Название опции"})
    nameOptions: string

    @ApiProperty({description: "Описание"})
    description: string

    @ApiProperty({description: "Объект опции"})
    objectOptions: string

    @ApiProperty({description: "Id измерения"})
    dimensionId: number

    @ApiProperty({description: "Id результата"})
    resultId: number

    @ApiProperty({description: "Id набора опций"})
    optionsPackage: number[]
}