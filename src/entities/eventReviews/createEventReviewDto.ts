import {ApiProperty} from "@nestjs/swagger";

export class CreateEventReviewDto
{
    @ApiProperty({ description: "ID пользователя" })
    userId: number

    @ApiProperty({ description: "ID события" })
    eventsId: number

    @ApiProperty({ description: "Описание события" })
    description: string

    @ApiProperty({description: "Дата события", required: false})
    dateCreate: Date
}