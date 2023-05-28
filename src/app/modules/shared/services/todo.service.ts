import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _jsonURL : string = 'http://localhost:3000/todos';

  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  /**
   * @description Get all todos
   * @return {*}  {Observable<Todo[]>}
   */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._jsonURL, httpOptions);
  }

  getTodosById(id: any): Observable<Todo> {
    return this.http.get<Todo>(`${this._jsonURL}/${id}`);
  }

  /**
   * @description Update todo
   * @param {Todo} todo
   * @return {*}  {Observable<Todo>}
   */
  updateTodo(todo: Todo): Observable<Todo> {
    console.log(todo);
    return this.http.put<Todo>(`${this._jsonURL}/${todo.id}`, todo, httpOptions);
  }
}
