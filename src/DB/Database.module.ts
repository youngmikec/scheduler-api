import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

const DBNAME: string = process.env.MONGODB_URI_DEV || 'mongodb://localhost:27017/scheduler_db';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://younmikec:Thisisme1@cluster0.kdpzx.mongodb.net/scheduler_db?retryWrites=true&w=majority')
    ]
})
export class DatabaseModule {}