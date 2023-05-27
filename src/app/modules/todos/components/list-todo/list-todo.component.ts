import { Component, OnInit } from '@angular/core';
import * as constantsData from '../../../../modules/shared/i18n/constants.json';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  public TODO = constantsData;

  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().pipe(tap((todos: Todo[]) => {
      this.todos = todos;
      console.log(todos);
    })).subscribe();
  }

}
