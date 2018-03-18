import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorFeedbacksPageComponent } from './curator-feedbacks-page.component';

describe('CuratorFeedbacksPageComponent', () => {
  let component: CuratorFeedbacksPageComponent;
  let fixture: ComponentFixture<CuratorFeedbacksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorFeedbacksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorFeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
