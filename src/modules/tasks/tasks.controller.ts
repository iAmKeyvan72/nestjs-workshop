import {
  Get,
  Post,
  Put,
  Patch,
  Controller,
  UseFilters,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { Task } from './types/entities/task';
import { ApiTags } from '@nestjs/swagger';
import { TaskNotFoundExceptionFilter } from './exceptions/task-not-found.exception.filter';
import { PaginationQueryParamstDto } from './dtos/pagination-query-params.model.dto';
import { TasksPaginationResponseDto } from './dtos/pagination.model.dto';
import { CreatorDto, CreatorHeader } from './dtos/creator.model.dto';
import { TaskRequestBodyDto } from './dtos/task-request-body.model.dto';
import { IdParamsDto } from './dtos/id.model.dto';
import { UserNotFoundExceptionFilter } from './exceptions/user-not-found.exception.filter';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
@UseFilters(UserNotFoundExceptionFilter, TaskNotFoundExceptionFilter)
export class TasksController {
  // step 1: inject the tasks service
  constructor(private readonly tasksService: TasksService) {}

  // step 2: declare the proper decorator (CreatorHeader) in the function body and extract the value.
  // step 3: declare the proper decorator (PaginationQueryParamsDto) to extract the query params
  @Get()
  public async getTasksBycreator(
    @CreatorHeader() { creator }: CreatorDto,
    @Query() queryParams: PaginationQueryParamstDto,
  ): Promise<TasksPaginationResponseDto> {
    // step 3: call the appropriate method from the service.
    // step 4: pass in the arguments needed.
    try {
      return await this.tasksService.getTasksByCreator({
        creator,
        offset: queryParams.offset,
        limit: queryParams.limit,
      });
    } catch (e) {
      console.error(e);
      throw new Error('Not implemented');
    }
  }

  // step 5: implement the other features in the same way

  @Get(':id')
  public async getTaskById(
    @CreatorHeader() { creator }: CreatorDto,
    @Param('id') { id }: IdParamsDto,
  ): Promise<Task> {
    try {
      return await this.tasksService.getTaskById(creator, id);
    } catch (e) {
      console.error(e);
      throw new Error('Not implemented');
    }
  }

  @Post()
  public async createTask(
    @CreatorHeader() { creator }: CreatorDto,
    @Body() body: TaskRequestBodyDto,
  ): Promise<Task> {
    try {
      return await this.tasksService.createTask({
        ...body,
        creator,
      });
    } catch (e) {
      {
        console.error(e);
        throw new Error('Not implemented');
      }
    }
  }

  @Put(':id')
  public async updateTask(
    @CreatorHeader() { creator }: CreatorDto,
    @Param('id') { id }: IdParamsDto,
    @Body() body: TaskRequestBodyDto,
  ): Promise<Task> {
    try {
      return await this.tasksService.updateTask({
        ...body,
        creator,
        id,
      });
    } catch (e) {
      console.error(e);
      throw new Error('Not implemented');
    }
  }

  @Patch(':id/complete')
  public async markAsComplete(
    @CreatorHeader() { creator }: CreatorDto,
    @Param('id') { id }: IdParamsDto,
  ): Promise<Task> {
    try {
      return await this.tasksService.markAsComplete(creator, id);
    } catch (e) {
      console.error(e);
      throw new Error('Not implemented');
    }
  }
}
