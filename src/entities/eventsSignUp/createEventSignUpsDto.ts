import {ApiProperty} from "@nestjs/swagger";

export class CreateEventSignUpsDto
{
    @ApiProperty({ description: "Id подписчика на событие"})
    singUser: number

    @ApiProperty( {description: "Id роли события"})
    roleId: number

    @ApiProperty({description: "Id события"})
    eventsId: number
}