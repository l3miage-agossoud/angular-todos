import { Component, OnInit } from '@angular/core';
import * as constantsData from '../../../../modules/shared/i18n/fr.json';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

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
  newTodo!: Todo;
  checked = false;

  constructor(
    private todoService: TodoService,
    private route: Router ) { }

  ngOnInit() {
    this.newTodo = JSON.parse(sessionStorage.getItem('newTodo') as string);
    sessionStorage.removeItem('newTodo');
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getTodos().pipe(tap((todos: Todo[]) => {
      const todosEnded = todos.filter((todo: Todo) => todo.state === true && todo.id !== this.newTodo?.id);
      const todosNotEnded = todos.filter((todo: Todo) => todo.state === false && todo.id !== this.newTodo?.id);
      const newAdd = todos.filter((todo: Todo) => {
        return todo.id === this.newTodo?.id;
    });
      this.dataSource = [...newAdd, ...todosNotEnded.reverse(), ...todosEnded];
    })).subscribe();
    this.newTodo = {} as Todo;
  }

  changeStateTodo($event: any) {
    if($event !== undefined && $event !== null) {
      this.todoUpdated = {
        id: $event.id,
        title: $event.title,
        state: true,
        description: $event.description
      };
      this.todoService.updateTodo(this.todoUpdated).subscribe(
        () => {
          this.getAllTodo();
        }
      );
    }
  }

  viewDetailTodo($event: any) {
    this.route.navigate(['/todos', $event.id]);
  }

  addNewTodo() {
    this.route.navigate(['new-todo']);
  }

}
