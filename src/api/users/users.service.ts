import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly usersModel: Model<User>) {}

    async create(createUserDto: CreateUserDto) {
        const newUser = await this.usersModel.create(createUserDto);
        if(!newUser) throw new Error('Error creating User')
        return newUser;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const newUser = await this.usersModel.findOneAndUpdate({ _id: id}, { ...updateUserDto });
        if(!newUser) throw new Error('Error updating User')
        return newUser;
    }

    async findAll(): Promise<User[]> {
        return this.usersModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.usersModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedUser = await this.usersModel.findOneAndDelete({ _id: id }).exec();
        if(!deletedUser) throw new Error('Error Deleting user')
        return deletedUser;
    }

}