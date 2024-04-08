import {ApiProperty} from "@nestjs/swagger";

export class CreateTypeEventsDto
{
    @ApiProperty({description: "Название"})
    name: string
}