import {ApiProperty} from "@nestjs/swagger";

export class CreateSummaryLecturesDto
{
    @ApiProperty({description: "Название документа"})
    docName: string

    @ApiProperty({description: "Флаг архивации"})
    archive: boolean

    @ApiProperty({description: "Хэш документа"})
    fileHash: string
}