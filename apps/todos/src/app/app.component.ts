import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@nxworkspace/data';

@Component({
  selector: 'nxworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe(t => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/todos/add', {}).subscribe(() => {
      this.fetch();
    });
  }

  deleteTodo(id: number) {
    this.http.delete(`/api/todos/delete/${id}`).subscribe(() => {
      this.fetch();
    });
  }
}
