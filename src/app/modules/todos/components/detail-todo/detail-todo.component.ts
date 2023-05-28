import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { Component, OnInit } from '@angular/core';
import * as constantsData from '../../../../modules/shared/i18n/fr.json';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss']
})
export class DetailTodoComponent implements OnInit {

  public TODO = constantsData;

  todo!: Todo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.getOneTodo();
  }

  getOneTodo() {
    this.todoService.getTodo(this.activatedRoute.snapshot.params['id']).pipe(
      tap((todo) => {
        this.todo = todo;
      })
    ).subscribe();
  }

  onBack(){
    this.route.navigate(['/todos']);
  }
}
