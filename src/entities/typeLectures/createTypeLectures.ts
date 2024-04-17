import {Column} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTypeLectures
{
    @ApiProperty({description: "Название"})
    name: string

    @ApiProperty({description: "Описание"})
    description: string
}