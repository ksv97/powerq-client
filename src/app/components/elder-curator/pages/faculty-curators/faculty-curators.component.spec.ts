import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCuratorsComponent } from './faculty-curators.component';

describe('FacultyCuratorsComponent', () => {
  let component: FacultyCuratorsComponent;
  let fixture: ComponentFixture<FacultyCuratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyCuratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyCuratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
