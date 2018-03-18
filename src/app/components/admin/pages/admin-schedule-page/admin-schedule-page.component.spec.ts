import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSchedulePageComponent } from './admin-schedule-page.component';

describe('AdminSchedulePageComponent', () => {
  let component: AdminSchedulePageComponent;
  let fixture: ComponentFixture<AdminSchedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSchedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
