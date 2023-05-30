import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

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
  emptyTodo!: Todo;

  constructor(private http: HttpClient) { }

  /**
   * @description Get all todos
   * @return {*}  {Observable<Todo[]>}
   */
  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this._jsonURL, httpOptions);
  }

  /**
   * @description Get todo by id
   * @param {number} id
   * @return {*}  {Observable<Todo>}
   */
  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this._jsonURL}/${id}`);
  }

  /**
   * @description Update todo
   * @param {Todo} todo
   * @return {*}  {Observable<Todo>}
   */
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this._jsonURL}/${todo.id}`, todo, httpOptions);
  }

  /**
   * @description Add a todo
   * @param {Todo} todo
   * @return {*} {Observable<Todo>}
   */
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this._jsonURL}`, JSON.stringify(todo), httpOptions);
  }
}
