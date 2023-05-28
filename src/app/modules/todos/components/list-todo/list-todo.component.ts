import { Component, OnInit } from '@angular/core';
import * as constantsData from '../../../../modules/shared/i18n/constants.json';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  displayedColumns: string[] = ['title', 'state'];
  dataSource: Todo[] = [];
  public TODO = constantsData;

  todoUpdated!: Todo;
  checked = false;

  constructor(
    private todoService: TodoService,
    private route: Router ) { }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getTodos().pipe(tap((todos: Todo[]) => {
      const todosEnded = todos.filter((todo: Todo) => todo.state === true);
      const todosNotEnded = todos.filter((todo: Todo) => todo.state === false);
      this.dataSource = [...todosNotEnded, ...todosEnded];
    })).subscribe();
  }

  changeState($event: any) {
    this.todoUpdated = {
      id: $event.id,
      title: $event.title,
      state: true,
    };
    this.todoService.updateTodo(this.todoUpdated).subscribe(
      () => {
        this.getAllTodo();
      }
    );
  }

  viewDetailTodo($event: any) {
    console.log($event);
    this.route.navigate(['/todos', $event.id]);
  }

}
