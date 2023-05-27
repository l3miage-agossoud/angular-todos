import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyTodoTabComponent } from './components/my-todo-tab/my-todo-tab.component';



@NgModule({
  declarations: [
    MyTodoTabComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
