import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { OfficeBranch, UserRole } from "src/common";

export type CatDocument = HydratedDocument<User>;

@Schema()
export class User {

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop()
    age: number;

    @Prop({ type: String, required: true })
    role: UserRole;

    @Prop({ type: String, required: true })
    branch: OfficeBranch;

    @Prop({ type: Boolean, default: false })
    hasContributed: boolean;

    @Prop({ type: Boolean, default: false })
    hasModerated: boolean;

    @Prop({ type: String, required: true})
    email: string;

    @Prop({ type: String, required: true})
    password: string;

    @Prop({ type: Date, default: Date.now()})
    createdAt: Date;

    // get id(): string {
    //     return this._id.toHexString(); // Convert _id to a string for 'id' property
    // }
}

export const UsersSchema = SchemaFactory.createForClass(User);