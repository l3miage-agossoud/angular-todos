import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTodoTabComponent } from './my-todo-tab.component';

describe('MyTodoTabComponent', () => {
  let component: MyTodoTabComponent;
  let fixture: ComponentFixture<MyTodoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTodoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTodoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
