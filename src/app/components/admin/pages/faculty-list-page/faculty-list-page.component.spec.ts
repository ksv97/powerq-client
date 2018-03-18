import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyListPageComponent } from './faculty-list-page.component';

describe('FacultyListPageComponent', () => {
  let component: FacultyListPageComponent;
  let fixture: ComponentFixture<FacultyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
