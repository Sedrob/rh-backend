import {ApiProperty} from "@nestjs/swagger";

export class CreateLectureDto
{
    @ApiProperty({description: "Заголовок"})
    title: string

    @ApiProperty({description: "Подзаголовок"})
    subtitle: string

    @ApiProperty({description: "Описание"})
    description: string

    @ApiProperty({description: "Является ли заархивированной"})
    stateArchive: boolean

    @ApiProperty({description: "Id описания лекции"})
    lectureSummaryId: number

    @ApiProperty({description: "Id презентации"})
    presentitionId: number

    @ApiProperty({description: "Id видео лекции"})
    lictureVideoId: number

    @ApiProperty({ description: "Id новости"})
    newsId: number

    @ApiProperty({description: "Id спутника"})
    satellitesId: number

    @ApiProperty({description: "Id типа лекции"})
    typeLectures: number
}