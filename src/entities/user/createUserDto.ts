import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto
{
    @ApiProperty({ description: "Имя" })
    middleName: string

    @ApiProperty({ description: "Фамилия" })
    firsName: string

    @ApiProperty({ description: "Отчество" })
    lastName: string

    @ApiProperty({ description: "Пароль" })
    password: string

    @ApiProperty({ description: "Email" })
    email: string

    @ApiProperty({ description: "Id паллады" })
    pallada: number

    @ApiProperty({ description: "Id роли пользователя" })
    roles: number
}