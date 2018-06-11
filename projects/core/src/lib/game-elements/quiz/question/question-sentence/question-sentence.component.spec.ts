import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSentenceComponent } from './question-sentence.component';

describe('QuestionSentenceComponent', () => {
  let component: QuestionSentenceComponent;
  let fixture: ComponentFixture<QuestionSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
