import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerManagerComponent } from './answer-manager.component';

describe('AnswerManagerComponent', () => {
  let component: AnswerManagerComponent;
  let fixture: ComponentFixture<AnswerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
