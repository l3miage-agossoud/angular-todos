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
  currentTodoId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private route: Router) {
  }

  ngOnInit(): void {
    this.currentTodoId = this.activatedRoute.snapshot.params['id'] as number;
    this.getTodo();
  }

  getTodo() {
    this.todoService.getTodo(this.currentTodoId).pipe(
      tap((todo) => {
        this.todo = todo;
      })
    ).subscribe();
  }

  onBack(){
    this.route.navigate(['/todos']);
  }
}
