import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorScheduleComponent } from './curator-schedule.component';

describe('CuratorScheduleComponent', () => {
  let component: CuratorScheduleComponent;
  let fixture: ComponentFixture<CuratorScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
