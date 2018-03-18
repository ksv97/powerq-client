import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderFeedbacksPageComponent } from './elder-feedbacks-page.component';

describe('ElderFeedbacksPageComponent', () => {
  let component: ElderFeedbacksPageComponent;
  let fixture: ComponentFixture<ElderFeedbacksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderFeedbacksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderFeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
