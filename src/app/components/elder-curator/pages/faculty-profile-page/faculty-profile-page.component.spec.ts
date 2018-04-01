import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyProfilePageComponent } from './faculty-profile-page.component';

describe('FacultyProfilePageComponent', () => {
  let component: FacultyProfilePageComponent;
  let fixture: ComponentFixture<FacultyProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
