import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './DB/Database.module';
import { UsersModule } from './api/users/users.module';
import { ScheduleModule } from './api/schedule/schedule.module';


@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    ScheduleModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
