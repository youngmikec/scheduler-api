import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";

import { User } from "./users.entity";
import { ApiResponse } from "../../common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { errorResponse, successResponse } from "../../utils/response";
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller({ path: 'users', version: '1' })
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<ApiResponse> {
        try {
            const result = await this.usersService.create(createUserDto);
            if(!result) throw new Error('Error! occurred while creating user');

            return successResponse(result, "success");
        }
        catch(err) {
            return errorResponse(err.message)
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        try {
            const result = await this.usersService.update(id, updateUserDto);
            if(!result) throw new Error('Error! occurred while Updating user');

            return successResponse(result, "User Updated Successfully");
        }
        catch(err) {
            return errorResponse(err.message)
        }
    }

    @Get()
    async findAll(): Promise<ApiResponse> {
        // use try catch to get the users data;
        try {
            const users = await this.usersService.findAll();
            return successResponse(users, "User Created Successfully");
        }catch(err){
            return errorResponse(err.message);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }

}