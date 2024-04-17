import {ApiProperty} from "@nestjs/swagger";

export class CreateFileVideoDto
{
    @ApiProperty({description: "Название документа"})
    docName: string

    @ApiProperty( {description: "Хэш файла"})
    fileHash: string
}