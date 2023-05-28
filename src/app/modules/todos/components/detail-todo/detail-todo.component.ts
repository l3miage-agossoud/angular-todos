import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { Component, OnInit } from '@angular/core';
import * as constantsData from '../../../../modules/shared/i18n/constants.json';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss']
})
export class DetailTodoComponent implements OnInit {

  public TODO = constantsData;

  todo!: Todo;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.todoService.getTodo(this.activatedRoute.snapshot.params['id']).pipe(
      tap((todo) => {
        this.todo = todo;
        console.log(todo);
      })
    ).subscribe();
  }

  onBack(){
    this.route.navigate(['/todos']);
  }
}
