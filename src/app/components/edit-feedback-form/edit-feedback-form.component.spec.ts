import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeedbackFormComponent } from './edit-feedback-form.component';

describe('EditFeedbackFormComponent', () => {
  let component: EditFeedbackFormComponent;
  let fixture: ComponentFixture<EditFeedbackFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeedbackFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
