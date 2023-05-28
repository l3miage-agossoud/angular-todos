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

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private route: Router) { }

  ngOnInit(): void {
      const ID = this.activatedRoute.snapshot.params['id'];
      console.log(ID);
      this.todoService.getTodo(ID).pipe(
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
