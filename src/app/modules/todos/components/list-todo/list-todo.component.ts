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

  updatedTodo!: Todo;
  newTodo!: Todo;
  newTodoUpdatedState!: Todo;
  checked = false;

  constructor(
    private todoService: TodoService,
    private route: Router ) { }

  ngOnInit() {
    this.newTodo = JSON.parse(sessionStorage.getItem('newTodo') as string);
    sessionStorage.removeItem('newTodo');
    sessionStorage.removeItem('newTodoUpdatedState');
    this.getAllTodo();


  }

  getAllTodo() {
    this.newTodoUpdatedState = JSON.parse(sessionStorage.getItem('newTodoUpdatedState') as string);
    this.todoService.getAllTodo().pipe(
      tap((todos: Todo[]) => {
        const updatedTodoIndex = todos.findIndex((todo: Todo) => todo.id === this.newTodoUpdatedState?.id);
        console.log(`1er index : `+updatedTodoIndex);

        if (this.newTodoUpdatedState && this.newTodoUpdatedState.state === true) {
          if (updatedTodoIndex !== -1) {
            const updatedTodo = todos.splice(updatedTodoIndex, 1)[0];
            todos.push(updatedTodo);
          }
        }

        const todosNotEnded = todos.filter((todo: Todo) => todo.state === false && todo.id !== this.newTodo?.id);
        const todosEnded = todos.filter((todo: Todo) => todo.state === true && todo.id !== this.newTodo?.id);
        const newAdd = todos.filter((todo: Todo) => todo.id === this.newTodo?.id);
        const newUpdatedTodo = todosEnded.filter((todo: Todo) => todo.id === this.newTodoUpdatedState?.id);

        const todosEndedWithoutNewUpdatedTodo = todosEnded.filter((todo: Todo) => todo.id !== this.newTodoUpdatedState?.id);

        this.dataSource = [...newAdd, ...todosNotEnded.reverse(), ...todosEndedWithoutNewUpdatedTodo, ...newUpdatedTodo];
      })
    ).subscribe(
      () => {
        sessionStorage.removeItem('newUpdatedTodoState');
      }
    );

    this.newTodo = {} as Todo;
    sessionStorage.removeItem('newUpdatedTodoState');
  }

  changeTodoState($event: any) {
    if($event !== undefined && $event !== null) {
      this.updatedTodo = {
        id: $event.id,
        title: $event.title,
        state: true,
        description: $event.description
      };
      this.todoService.updateTodo(this.updatedTodo).subscribe(
        () => {
          sessionStorage.setItem('newUpdatedTodoState', JSON.stringify(this.updatedTodo));
          this.getAllTodo();
        }
      );
    }
  }

  viewTodoDetails($event: any) {
    this.route.navigate(['/todos', $event.id]);
  }

  addTodo() {
    this.route.navigate(['new-todo']);
  }

}
