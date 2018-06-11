import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionBlanksComponent } from './question-blanks.component';


describe('BlanksComponent', () => {
  let component: QuestionBlanksComponent;
  let fixture: ComponentFixture<QuestionBlanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionBlanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionBlanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
