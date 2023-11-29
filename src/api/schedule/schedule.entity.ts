import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes, Types } from "mongoose";
import { User } from "../users/users.entity";

export type ScheduleDocument = HydratedDocument<Schedule>

@Schema()
export class Schedule {

    @Prop({ type: SchemaTypes.ObjectId, ref: 'User', required: true })
    moderator: Types.ObjectId;

    @Prop({ type: Number, required: true })
    numPair: number;

    @Prop({ type: [SchemaTypes.ObjectId], ref: 'User', required: true })
    contributors: Array<Types.ObjectId>;

    @Prop({ type: Date, default: Date.now()})
    createdAt: Date;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);