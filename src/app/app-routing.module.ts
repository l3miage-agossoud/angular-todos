import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './modules/template/components/template/template.component';

const routes: Routes = [
  { path: "", redirectTo: "/todos", pathMatch: "full" },
  {
    path: "",
    loadChildren: () => import('./modules/todos/todos.module').then(m => m.TodosModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
