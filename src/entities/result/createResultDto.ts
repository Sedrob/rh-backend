import {ApiProperty} from "@nestjs/swagger";

export class CreateResultDto
{
    @ApiProperty({description: "Название результата"})
    name: string

    @ApiProperty({description: "Описание результата"})
    description: string
}