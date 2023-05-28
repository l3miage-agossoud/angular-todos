import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { RouterModule } from '@angular/router';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';
import { TemplateComponent } from '../template/components/template/template.component';

export const routes = [
  {
    path: "todos",
    component: ListTodoComponent,
  },
  {
    path: "todos/:id",
    component: DetailTodoComponent
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
