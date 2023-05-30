import { Todo } from 'src/app/modules/shared/interfaces/todo';
import { routes } from './../../todo-routing.module';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DetailTodoComponent } from './detail-todo.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import * as todoMocked from '../../../../modules/shared/mocks/todoService-mocked-constants';
import { of } from 'rxjs/internal/observable/of';


describe('DetailTodoComponent', () => {
  let component: DetailTodoComponent;
  let fixture: ComponentFixture<DetailTodoComponent>;
  let router: Router;
  let location: Location;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ DetailTodoComponent ],
      imports: [ RouterTestingModule.withRoutes(routes), HttpClientTestingModule ],
      providers: [ TodoService  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTodoComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    todoService = TestBed.inject(TodoService);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`getOneTodo should return void but you need a 'Detail of todo'`, () => {
    const currentTodoMocked: Todo = todoMocked.todo1;
    component.currentTodoId = 1;
    spyOn(todoService, 'getTodo').and.returnValue(of(currentTodoMocked));
    component.getTodo();
    expect(todoService.getTodo).toHaveBeenCalledOnceWith(component.currentTodoId);
    console.log(component.todo);
    expect(component.todo).toEqual(currentTodoMocked);
  });

  it(`onBack should retrun void`, fakeAsync(() => {
    router.navigate(['todos']);
    tick();
    expect(location.path()).toBe('/todos');
  }));
});
