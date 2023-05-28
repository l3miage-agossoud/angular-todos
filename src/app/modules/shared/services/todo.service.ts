import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs/internal/Observable';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _jsonURL = 'http://localhost:3000/todos';

  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  /**
   * @description Get all todos
   * @return {*}  {Observable<Todo[]>}
   * @memberof TodoService
   */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._jsonURL);
  }
}
