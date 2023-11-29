import { ApiProperty } from "@nestjs/swagger";
import { OfficeBranch, UserRole } from "src/common";

export class CreateUserDto {
    @ApiProperty({
        title: 'First Name',
        description: 'Users first Name',
        example: 'Michael',
        required: true,
    })
    firstName: string;

    @ApiProperty({
        title: 'Last Name',
        description: 'Users last name',
        example: 'Ben',
        required: true,
    })
    lastName: string;

    @ApiProperty({
        title: 'Role',
        description: "User's job role",
        example: 'HR',
        required: true,
    })
    role: UserRole;

    @ApiProperty({
        title: 'Office Branch',
        description: "User's Office branch",
        example: 'Abuja',
        required: true
    })
    branch: OfficeBranch;

    @ApiProperty({
        title: 'Email',
        description: "User's login Email",
        example: 'example@gmail.com',
        required: true
    })
    email: string;

    @ApiProperty({
        title: 'Password',
        description: "User's password",
        required: true
    })
    password: string;
    
}