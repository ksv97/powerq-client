import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySchedulePageComponent } from './faculty-schedule-page.component';

describe('FacultySchedulePageComponent', () => {
  let component: FacultySchedulePageComponent;
  let fixture: ComponentFixture<FacultySchedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultySchedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
