import { TodosModule } from './../todos/todos.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './components/template/template.component';
import { RouterModule } from '@angular/router';

export const routes = [
  {
    path: "home",
    component: TemplateComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('../../modules/todos/todos.module').then(m => m.TodosModule),
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
export class TemplateRoutingModule { }
