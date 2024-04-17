import {ApiProperty} from "@nestjs/swagger";

export class CreateProjectionDto
{
    @ApiProperty({description: "Название проекции"})
    name: string

    @ApiProperty({description: "Описание проекции"})
    description: string

    @ApiProperty({description: "Хэш изображения"})
    image: string

    @ApiProperty({description: "Флаг архивации"})
    archive: boolean

    @ApiProperty({description: "Id экипировки"})
    equipmentId: number
}