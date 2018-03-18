import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderProfilePageComponent } from './elder-profile-page.component';

describe('ElderProfilePageComponent', () => {
  let component: ElderProfilePageComponent;
  let fixture: ComponentFixture<ElderProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
