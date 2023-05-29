import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTodoComponent } from './components/list-todo/list-todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../shared/services/todo.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';
import {MatButtonModule} from '@angular/material/button';
import { AddNewTodoComponent } from './components/add-new-todo/add-new-todo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListTodoComponent,
    DetailTodoComponent,
    AddNewTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule,
    HttpClientModule,
    SharedModule,
    MatTableModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatListModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListTodoComponent
  ],
  providers: [ TodoService ]
})
export class TodosModule { }
