import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';




@NgModule({
  declarations: [
    ListTodoComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule,
  ],
  exports: [
    ListTodoComponent
  ]
})
export class TodosModule { }
