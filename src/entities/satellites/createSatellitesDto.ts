import {ApiProperty} from "@nestjs/swagger";

export class CreateSatellitesDto
{
    @ApiProperty({description: "Название"})
    name: string

    @ApiProperty({description: "Заголовок"})
    title: string

    @ApiProperty({description: "Назначение"})
    purpose: string

    @ApiProperty({description: "Объект"})
    objectiv: string

    @ApiProperty({description: "Цель"})
    target: string

    @ApiProperty({description: "Дата выхода на орбиту"})
    dateOrbit: Date

    @ApiProperty({description: "Флаг архивации"})
    stateArchive: boolean
}