import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackFormComponent } from './add-feedback-form.component';

describe('AddFeedbackFormComponent', () => {
  let component: AddFeedbackFormComponent;
  let fixture: ComponentFixture<AddFeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeedbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
