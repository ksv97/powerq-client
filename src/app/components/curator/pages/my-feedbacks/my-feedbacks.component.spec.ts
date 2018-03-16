import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeedbacksComponent } from './my-feedbacks.component';

describe('MyFeedbacksComponent', () => {
  let component: MyFeedbacksComponent;
  let fixture: ComponentFixture<MyFeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
