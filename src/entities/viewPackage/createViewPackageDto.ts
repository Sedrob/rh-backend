import {ApiProperty} from "@nestjs/swagger";

export class CreateViewPackageDto
{
    @ApiProperty({description: "Имя пакета"})
    namePackage: string
}