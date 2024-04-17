import {ApiProperty} from "@nestjs/swagger";

export class CreatePresentationDto
{
    @ApiProperty({description: "Название презентации"})
    docName: string

    @ApiProperty({description: "Хэш презентации"})
    fileHash: string
}