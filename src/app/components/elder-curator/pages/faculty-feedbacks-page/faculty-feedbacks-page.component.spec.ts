import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyFeedbacksPageComponent } from './faculty-feedbacks-page.component';

describe('FacultyFeedbacksPageComponent', () => {
  let component: FacultyFeedbacksPageComponent;
  let fixture: ComponentFixture<FacultyFeedbacksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyFeedbacksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyFeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
