import { TodoRoutingModule } from './../../todo-routing.module';
import { TodoService } from 'src/app/modules/shared/services/todo.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodoComponent } from './detail-todo.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DetailTodoComponent', () => {
  let component: DetailTodoComponent;
  let fixture: ComponentFixture<DetailTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ DetailTodoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ TodoService  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
