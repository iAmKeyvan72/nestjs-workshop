import { Task } from './types/entities/task';
import { Pagination } from './types/api/pagination.type';
import { Controller, Get, Param } from '@nestjs/common';

// FIXME: declare the class as a controller
@Controller('tasks')
export class TasksController {
  // FIXME: add the appropriate decorator to the method
  @Get('')
  public async getTasksBycreator(): Promise<Pagination<Task>> {
    // no need to change any code here
    return Promise.resolve({ total: 0, offset: 0, limit: 0, data: [] });
  }

  // FIXME: use the same decorator but pass in the param. Call the param "id"
  @Get(':id')
  public getTaskById(
    // step 4: extract the id from the request
    @Param('id') id: string,
  ): unknown {
    // no need to change any code here
    return { id };
  }
}
