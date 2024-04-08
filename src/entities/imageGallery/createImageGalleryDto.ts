import {ApiProperty} from "@nestjs/swagger";

export class CreateImageGalleryDto
{
    @ApiProperty({description: "Id изображения"})
    imageId: number

    @ApiProperty({description: "Id галереи"})
    galleryId: number
}