import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAssignmentComponent } from './mark-assignment.component';

describe('MarkAssignmentComponent', () => {
  let component: MarkAssignmentComponent;
  let fixture: ComponentFixture<MarkAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
