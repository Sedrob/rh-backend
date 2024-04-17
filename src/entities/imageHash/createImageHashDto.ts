import {ApiProperty} from "@nestjs/swagger";

export class CreateImageHashDto
{
    @ApiProperty({description: "Имя изображения"})
    imageName: string

    @ApiProperty({description: "Описание к изображению"})
    description: string

    @ApiProperty({description: "Хэш изображения"})
    fileHash: string
}