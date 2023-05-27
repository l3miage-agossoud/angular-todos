import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './components/template/template.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { TemplateRoutingModule } from './template-routing.module';
import { TodosModule } from '../todos/todos.module';



@NgModule({
  declarations: [
    TemplateComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    TodosModule,
  ]
})
export class TemplateModule { }
