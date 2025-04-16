import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

@Module({
  // FIXME: what is missing here for NestJs to be able to inject the service and repository?
  providers: [TasksService, TasksRepository],
  controllers: [TasksController],
})
export class TasksModule {}
