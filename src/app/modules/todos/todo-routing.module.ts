import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';

export const routes = [
  {
    path: "",
    component: TodoComponent,
    children: [
      {
        path: "todos",
        component: ListTodoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
