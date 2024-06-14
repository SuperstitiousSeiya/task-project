import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, DbModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
