import { Injectable } from '@nestjs/common';

import { Todo } from '@nxworkspace/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
  
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}