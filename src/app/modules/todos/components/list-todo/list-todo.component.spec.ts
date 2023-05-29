import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { TodoRoutingModule, routes } from './../../todo-routing.module';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ListTodoComponent } from './list-todo.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import * as todoMocked from '../../../../modules/shared/mocks/todoService-mocked-constants';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('ListTodoComponent', () => {
  let component: ListTodoComponent;
  let fixture: ComponentFixture<ListTodoComponent>;
  let todoService: TodoService;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ListTodoComponent,],
      imports: [
        RouterTestingModule.withRoutes(routes), HttpClientTestingModule
      ],
      providers: [TodoService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTodoComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void', (() => {
    const newTodo = JSON.parse(sessionStorage.getItem('newTodo') as string) as Todo;
    component.newTodo = newTodo;
    expect(component.newTodo?.title).toEqual('' || undefined as unknown as string);

    const todosEnded = todoMocked.todos3.filter(
      (todo: Todo) => todo.state === true && todo.id !== newTodo?.id
    );
    const todosNotEnded = todoMocked.todos3.filter(
      (todo: Todo) => todo.state === false && todo.id !== newTodo?.id
    );
    const newAdd2 = todoMocked.todos3.filter(
      (todo: Todo) => todo.id = newTodo?.id
    );
    component.dataSource = [...newAdd2, ...todosNotEnded.reverse(), ...todosEnded];
    expect(component.dataSource.length).toBe(4);
    expect(component.dataSource).toEqual(todoMocked.todos3);
  }));

  it('getAllTodo should return void', () => {
    const newTodo = JSON.parse(sessionStorage.getItem('newTodo') as string) as Todo;
    const todosEnded = todoMocked.todos1.filter(
      (todo: Todo) => todo.state === true && todo.id !== newTodo?.id
    );
    const todosNotEnded = todoMocked.todos1.filter(
      (todo: Todo) => todo.state === false && todo.id !== newTodo?.id
    );
    const newAdd = todoMocked.todos1.filter(
      (todo: Todo) => todo.id = newTodo?.id
    );
    component.dataSource = [...newAdd, ...todosNotEnded.reverse(), ...todosEnded];
    expect(component.dataSource.length).toBe(4);
    expect(component.dataSource).toEqual(todoMocked.todos1);
  });

  it('changeStateTodo should return void', () => {
    const currentTodoUpdated = todoMocked.todo8;
    component.todoUpdated = {
      id: currentTodoUpdated.id,
      title: currentTodoUpdated.title,
      state: true,
      description: currentTodoUpdated.description
    }
    component.changeStateTodo(component.todoUpdated);

    expect(component.todoUpdated.id).toEqual(todoMocked.todoUpdated.id);
    expect(component.todoUpdated.state).toEqual(todoMocked.todoUpdated.state);
    expect(component.todoUpdated.description).toEqual(todoMocked.todoUpdated.description);

  });

  it('viewDetailTodo should retrun void', fakeAsync (() => {
    const currentTodo = todoMocked.todo1;
    router.navigate(['/todos', currentTodo.id]);
    tick();
    expect(location.path()).toBe('/todos/1');

  }));

  it('addNewTodo should retrun void', fakeAsync(() => {
    router.navigate(['new-todo']);
    tick();
    expect(location.path()).toBe('/new-todo');
  }))
});
