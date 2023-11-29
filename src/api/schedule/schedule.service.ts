import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Schedule } from "./schedule.entity";
import { GenerateScheduleDto } from "./dto/generate-schedule.dto";
import { UsersService } from "../users/users.service";
import { User } from "../users/users.entity";
import { Branches } from "src/Constants";

@Injectable()
export class ScheduleService {

    constructor(
        @InjectModel('schedule') private readonly scheduleModel: Model<Schedule>,
        @InjectModel(User.name) private readonly usersModel: Model<User>
    ){}

    async findAll(): Promise<Schedule[]> {
        return this.scheduleModel.find().populate(['moderator', 'contributors']).exec();
    }

    async create(generateScheduleDto: GenerateScheduleDto): Promise<any> {
        
        const numOfContributors: number = generateScheduleDto.numOfContributors;
        let contributors = [];
        let moderator: any;

        // get users who has not contributed and users that has not moderated.
        const users = await this.usersModel.find({ hasContributed: false }).exec();
        const usersToModerate = await this.usersModel.find({ hasModerated: false}).exec();

        if(usersToModerate.length > 0){
            moderator = usersToModerate[0];
        }
        
        Branches.forEach((branch: string) => {
            const results = users.filter(user => user.branch === branch);
            if(results.length > numOfContributors){
                contributors = [...results.slice(0, numOfContributors), ...contributors];
            }else{
                contributors = [...results, ...contributors];
            }
            
        });
        

        const data = {
            moderator: moderator._id,
            contributors: contributors.map(item => item._id),
            numPair: numOfContributors
        }

        // save schedule
        const newSchedule = await this.scheduleModel.create(data);
        if(!newSchedule) throw new Error('Error creating Schedule');

        // update contributors and moderators
        const updatedModerators = await this.usersModel.findOneAndUpdate({ _id: data.moderator }, {$set: {hasModerated: true} }).exec();
        const updatedContributors = await this.usersModel.updateMany(
            {_id: {$in: data.contributors}},
            {$set: {hasContributed: true}}
        ).exec();

        if(!updatedContributors) throw new Error('Error Occurred while updating contributors');
        if(!updatedModerators) throw new Error('Error Occurred while updating Moderator');

        return newSchedule;
    }
}