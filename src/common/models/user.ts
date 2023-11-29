import { UserRole } from "../enums";

export interface Users {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    role: UserRole;
    createdAt: Date;
}