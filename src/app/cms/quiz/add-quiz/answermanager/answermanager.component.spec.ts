import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswermanagerComponent } from './answermanager.component';

describe('AnswermanagerComponent', () => {
  let component: AnswermanagerComponent;
  let fixture: ComponentFixture<AnswermanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswermanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
