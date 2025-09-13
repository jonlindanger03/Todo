import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComp } from './todo-comp';

describe('TodoComp', () => {
  let component: TodoComp;
  let fixture: ComponentFixture<TodoComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
