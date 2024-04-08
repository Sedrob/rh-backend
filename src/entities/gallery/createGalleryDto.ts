import {ApiProperty} from "@nestjs/swagger";

export class CreateGalleryDto
{
    @ApiProperty({description: "Дата создания"})
    dateCreate: Date

    @ApiProperty({description: "Название галереи"})
    galleryName: string

    @ApiProperty({description: "Имя автора галереи"})
    author: string

    @ApiProperty({description: "Заархивирована"})
    stateArchive: boolean

    @ApiProperty({description: "Id спутника"})
    satellitesId: number

    @ApiProperty( {description: "Id новости"})
    newsId: number
}