import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollManagerComponent } from './poll-manager.component';

describe('PollManagerComponent', () => {
  let component: PollManagerComponent;
  let fixture: ComponentFixture<PollManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
