import {ApiProperty} from "@nestjs/swagger";

export class CreateNewsDto
{
    @ApiProperty({description: "Id категории новости"})
    category: number

    @ApiProperty({description: "Заголовок"})
    title: string

    @ApiProperty({description: "Подзаголовок"})
    subtitle: string

    @ApiProperty({description: "Текст новости"})
    newsText: string

    @ApiProperty({description: "Дата создания"})
    createDate: Date

    @ApiProperty({description: "Заархивирован ли"})
    stateArchive: boolean

    @ApiProperty({description: "Id изображения"})
    images: number

    @ApiProperty({description: "Количество просмотров"})
    views: number

    @ApiProperty({description: "Количество избранных"})
    favouritos: number

    @ApiProperty({description: "Id спутника"})
    satellitesId: number

    @ApiProperty({description: "Id события"})
    eventsId: number

    @ApiProperty({description: "Id лекции"})
    lecturesId: number

    @ApiProperty({description: "Id галереи"})
    galleryId: number
}