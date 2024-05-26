import {ApiProperty} from "@nestjs/swagger";

export class СategorySatellitesDto
{
    @ApiProperty({description: "Название"})
    name: string

    @ApiProperty({description: "Короткое название"})
    tag: string

    @ApiProperty({description: "Связь спутника"})
    satellites: number

}