import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoCardComponent } from './components/todo-card/todo-card.component';



@NgModule({
  declarations: [
    TodoCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    TodoCardComponent,
  ],
})
export class SharedModule { }
