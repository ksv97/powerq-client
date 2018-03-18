import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeadlinesPageComponent } from './admin-deadlines-page.component';

describe('AdminDeadlinesPageComponent', () => {
  let component: AdminDeadlinesPageComponent;
  let fixture: ComponentFixture<AdminDeadlinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeadlinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeadlinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
