import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';

// FIXME: declare the controller as part of the tasks module
@Module({ controllers: [TasksController] })
export class TasksModule {}
