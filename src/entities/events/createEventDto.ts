import {Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {News} from "@entities/news/news.entity";
import {User} from "@entities/user/user.entity";
import {StateEvents} from "@entities/stateEvents/stateEvents.entity";
import {TypeEvents} from "@entities/typeEvents/typeEvents.entity";
import {Satellites} from "@entities/satellites/satellites.entity";
import {ApiProperty} from "@nestjs/swagger";

export class CreateEventDto
{
    @ApiProperty({ description: "Название события" })
    name: string

    @ApiProperty({ description: "Подзаголовок события"})
    subtitle: string

    @ApiProperty({ description: "Описание события" })
    description: string

    @ApiProperty({ description: "Подписка на событие"})
    signedUp: number

    @ApiProperty({description: "ID новости"})
    newsId: number

    @ApiProperty({description: "ID создателя события"})
    userCreateId: number

    @ApiProperty( {description: "Id состояния события"})
    eventsState: number

    @ApiProperty({description: "ID типа события"})
    eventsType: number

    @ApiProperty( {description: "Удален"})
    delete: boolean

    @ApiProperty({description: "ID спутника"})
    satellitesId: number

    @ApiProperty({ description: "Дата начала"})
    dateStart: Date

    @ApiProperty({ description: "Дата окончания"})
    dateEnd: Date
}