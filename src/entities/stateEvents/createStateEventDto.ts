import {ApiProperty} from "@nestjs/swagger";

export class CreateStateEventDto
{
    @ApiProperty({description: "Название"})
    name: string
}