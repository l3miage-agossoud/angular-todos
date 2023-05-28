import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { RouterModule } from '@angular/router';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';
import { TemplateComponent } from '../template/components/template/template.component';
import { AddNewTodoComponent } from './components/add-new-todo/add-new-todo.component';

export const routes = [
  {
    path: "todos",
    component: ListTodoComponent,
  },
  {
    path: "todos/:id",
    component: DetailTodoComponent
  },
  {
    path: "new-todo",
    component: AddNewTodoComponent
  }
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
