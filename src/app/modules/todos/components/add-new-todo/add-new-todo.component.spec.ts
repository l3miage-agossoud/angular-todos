import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { TodoRoutingModule, routes } from './../../todo-routing.module';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddNewTodoComponent } from './add-new-todo.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { of } from 'rxjs/internal/observable/of';
import * as todoMocked from '../../../../modules/shared/mocks/todoService-mocked-constants';

describe('AddNewTodoComponent', () => {
  let component: AddNewTodoComponent;
  let fixture: ComponentFixture<AddNewTodoComponent>;
  let router: Router;
  let location: Location;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [AddNewTodoComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ TodoService  ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddNewTodoComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    todoService = TestBed.get(TodoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should initialize instance of FormGroup call getAllTodo', () => {
    spyOn(component, 'getAllTodo');
    component.ngOnInit();
    expect(component.todoForm).toBeTruthy();
    expect(component.todoForm instanceof FormGroup).toBeTrue();
    expect(component.todoForm.get('title')).toBeTruthy();
    expect(component.todoForm.get('description')).toBeTruthy();
    expect(component.getAllTodo).toHaveBeenCalled();
  });

  it('getAllTodo should return void but initialize todos', () => {
    spyOn(todoService, 'getAllTodo').and.returnValue(of(todoMocked.todos1));
    component.getAllTodo();
    expect(component.todos).toEqual(todoMocked.todos1);
  });

  it(`onBack should retrun void`, fakeAsync(() => {
    router.navigate(['todos']);
    tick();
    expect(location.path()).toBe('/todos');
  }));

  it('should not add new todo if formTodo is invalid', () => {
    let routerSpy = spyOn(router, 'navigate');
    component.todoForm.get('title')?.setValue('');
    component.todoForm.get('description')?.setValue('');

    const newTodo = sessionStorage.getItem('newTodo');
    component.onSubmit();

    expect(component.todo).toBeUndefined();
    expect(newTodo).toBeNull();
  });
});
