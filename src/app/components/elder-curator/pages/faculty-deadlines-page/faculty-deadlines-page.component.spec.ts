import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDeadlinesPageComponent } from './faculty-deadlines-page.component';

describe('FacultyDeadlinesPageComponent', () => {
  let component: FacultyDeadlinesPageComponent;
  let fixture: ComponentFixture<FacultyDeadlinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyDeadlinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDeadlinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
