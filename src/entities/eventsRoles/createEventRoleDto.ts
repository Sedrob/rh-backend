import {ApiProperty} from "@nestjs/swagger";

export class CreateEventRoleDto
{
    @ApiProperty({ description: "Название роли"})
    name: string

    @ApiProperty({ description: "Описание роли события"})
    decription: string
}