import { ApiProperty } from '@nestjs/swagger';
import { OfficeBranch, UserRole } from "src/common";


export class UpdateUserDto {
    @ApiProperty({
        title: 'First Name',
        description: 'Users first Name',
        example: 'Michael',
    })
    firstName: string;

    @ApiProperty({
        title: 'Last Name',
        description: 'Users last name',
        example: 'Ben',
    })
    lastName: string;

    @ApiProperty({
        title: 'Role',
        description: "User's job role",
        example: 'HR',
    })
    role: UserRole;

    @ApiProperty({
        title: 'Office Branch',
        description: "User's Office branch",
        example: 'Abuja',
    })
    branch: OfficeBranch;

    @ApiProperty({
        title: 'Email',
        description: "User's login Email",
        example: 'example@gmail.com',
    })
    email: string;

}