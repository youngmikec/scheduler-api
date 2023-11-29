import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleService } from "./schedule.service";
import { ScheduleController } from "./schedule.controller";
import { ScheduleSchema } from "./schedule.entity";
import { UsersModule } from "../users/users.module";
import { User, UsersSchema } from "../users/users.entity";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'schedule', schema: ScheduleSchema}]),
        MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
    ],
    providers: [ScheduleService],
    controllers: [ScheduleController],
    exports: [ScheduleService]
})
export class ScheduleModule {}