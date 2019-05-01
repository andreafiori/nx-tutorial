import { Controller, Get, Post, Param, Delete } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('todos/add')
  addTodo() {
    return this.appService.addTodo();
  }

  @Delete('todos/delete/:id')
  deleteTodo(@Param('id') id) {
    return this.appService.deleteTodo(id);
  }
}