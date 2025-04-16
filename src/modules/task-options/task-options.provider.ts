import { ConfigService } from '@nestjs/config';

export const TaskOptionsProvider = (configService: ConfigService): string[] => {
  // FIXME: use the configService to get the task options from the environment variable instead. It is a string so map it to a proper array of strings
  const taskOptionsEnv = configService.get<string>('TASK_OPTIONS');
  if (!taskOptionsEnv) {
    return [];
  }
  const taskOptions = taskOptionsEnv.split(',').map((option) => option.trim());
  return taskOptions;
};
