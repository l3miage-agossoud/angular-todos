import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs/internal/Observable';

export const _urlDB = '@modules/shared/data/database-todo.json';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  /**
   * @description Get all todos
   * @return {*}  {Observable<Todo[]>}
   * @memberof TodoService
   */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(_urlDB);
  }
}
