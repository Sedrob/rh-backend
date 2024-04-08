import {ApiProperty} from "@nestjs/swagger";

export class CreateOptionsPackageDto
{
    @ApiProperty({description: "Id набора"})
    packageId: number

    @ApiProperty({description: "Id опции"})
    optionId: number
}