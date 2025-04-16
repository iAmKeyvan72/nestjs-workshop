import { Module } from '@nestjs/common';
import { TaskOptionsService } from './task-options.service';
import { TaskOptionsController } from './task-options.controller';
import { TASK_OPTIONS_TOKEN } from './constants';
import { TaskOptionsProvider } from './task-options.provider';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TaskOptionsController],
  providers: [
    { provide: TaskOptionsService, useClass: TaskOptionsService },
    {
      provide: TASK_OPTIONS_TOKEN,
      useFactory: TaskOptionsProvider,
      inject: [ConfigService],
    },
  ],
})
export class TaskOptionsModule {}
