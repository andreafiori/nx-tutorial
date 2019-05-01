import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '@nxworkspace/data';

@Component({
  selector: 'nxworkspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  
  @Input() deleteTodo: Function;

  constructor() { }

  ngOnInit() {
  }

}
