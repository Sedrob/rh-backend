import {ApiProperty} from "@nestjs/swagger";

export class CreateUserFavouriteNewsDto
{
    @ApiProperty({ description: "Id пользователя" })
    userId: number;

    @ApiProperty({ description: "Id новости" })
    newsId: number;
}