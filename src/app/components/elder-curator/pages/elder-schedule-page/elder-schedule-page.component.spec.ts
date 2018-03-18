import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderSchedulePageComponent } from './elder-schedule-page.component';

describe('ElderSchedulePageComponent', () => {
  let component: ElderSchedulePageComponent;
  let fixture: ComponentFixture<ElderSchedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderSchedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
