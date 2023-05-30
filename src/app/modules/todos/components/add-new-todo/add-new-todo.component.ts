import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { Component, OnInit } from '@angular/core';
import * as constantsData from '../../../../modules/shared/i18n/fr.json';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent implements OnInit {
  public TODO = constantsData;
  todoForm!: FormGroup;
  todo!: Todo;
  todos!: Array<Todo>;

  constructor(private route: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('')
    });
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAllTodo().pipe(
      map((todos) => { this.todos = todos; })
    ).subscribe();
  }
  onBack() {
    this.route.navigate(['/todos']);
  }

  onSubmit() {
    if (this.todoForm.valid) {
      const title = this.todoForm.get('title')?.value;
      const state = false;
      const description = this.todoForm.get('description')?.value
      const id = this.todos.length + 1;
      this.todo = {
        id,
        title,
        state,
        description,
      }
      this.todoService.addTodo(this.todo).pipe(
        tap(),
      ).subscribe(
        () => {
          sessionStorage.setItem('newTodo', JSON.stringify(this.todo))
          this.route.navigate(['/todos']);
        }
      )
    }
  }
}
