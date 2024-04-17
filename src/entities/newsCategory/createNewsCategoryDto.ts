import {ApiProperty} from "@nestjs/swagger";

export class CreateNewsCategoryDto
{
    @ApiProperty({description: "Название категории новости"})
    category: string

    @ApiProperty({description: "Флаг архивации"})
    stateArchive: boolean
}