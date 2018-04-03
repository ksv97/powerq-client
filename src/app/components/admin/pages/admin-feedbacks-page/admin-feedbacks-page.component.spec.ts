import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbacksPageComponent } from './admin-feedbacks-page.component';

describe('AdminFeedbacksPageComponent', () => {
  let component: AdminFeedbacksPageComponent;
  let fixture: ComponentFixture<AdminFeedbacksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFeedbacksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
