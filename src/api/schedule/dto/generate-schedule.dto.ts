import { ApiProperty } from "@nestjs/swagger";

export class GenerateScheduleDto {
    @ApiProperty({
        title: 'num of contributors',
        type: Number,
        description: 'Number of contributors per branch',
        example: '2'
    })
    numOfContributors: number;
}