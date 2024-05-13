import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto
{
    @ApiProperty({description: "Название роли"})
    name: string

    @ApiProperty({description: "Описание роли"})
    decription: string

    @ApiProperty({description: "Код роли"})
    code: string
}