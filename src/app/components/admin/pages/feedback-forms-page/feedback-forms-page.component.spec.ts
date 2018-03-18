import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormsPageComponent } from './feedback-forms-page.component';

describe('FeedbackFormsPageComponent', () => {
  let component: FeedbackFormsPageComponent;
  let fixture: ComponentFixture<FeedbackFormsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackFormsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
