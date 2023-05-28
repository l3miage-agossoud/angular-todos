import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as todoMocked from '../../../modules/shared/mocks/todoService-mocked-constants';


import { TodoService } from './todo.service';
import { Todo } from '../interfaces/todo';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTodos should return an Observable<Todo[]>', () => {
    service.getTodos().subscribe((todos: any) => {
      expect(todos.length).toBe(4);
      expect(todos).toEqual(todoMocked.todos1);
    });

    const req = httpMock.expectOne('http://localhost:3000/todos');
    expect(req.request.method).toBe('GET');
    req.flush(todoMocked.todos1);
  });

  it('#getTodo should return an Observable<Todo>', () => {
    service.getTodo(1).subscribe((todo: any) => {
      expect(todo).toEqual(todoMocked.todo1);
    });

    const req = httpMock.expectOne('http://localhost:3000/todos/1');
    expect(req.request.method).toBe('GET');
    req.flush(todoMocked.todo1);
  });

  it('#addTodo should return an Observable<Todo>', () => {
    const todos: Todo[] = todoMocked.todos1;
    service.addTodo({
      id: todos.length + 1,
      title: 'Test',
      state: false,
      description: 'Test'
    }).subscribe((todo: any) => {
      expect(todo).toEqual(todoMocked.todoTesting);
    });

    const req = httpMock.expectOne('http://localhost:3000/todos');
    expect(req.request.method).toBe('POST');
    req.flush(todoMocked.todoTesting);
  });

  it('#updateTodo should return an Observable<Todo>', () => {
    service.updateTodo({
      id: 6,
      title: 'Test',
      state: true,
      description: 'Test'
    }).subscribe((todo: any) => {
      expect(todo).toEqual(todoMocked.todoTesting);
    });

    const req = httpMock.expectOne('http://localhost:3000/todos/6');
    expect(req.request.method).toBe('PUT');
    req.flush(todoMocked.todoTesting);
  });
});
