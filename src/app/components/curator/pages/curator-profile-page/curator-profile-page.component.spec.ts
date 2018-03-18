import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorProfilePageComponent } from './curator-profile-page.component';

describe('CuratorProfilePageComponent', () => {
  let component: CuratorProfilePageComponent;
  let fixture: ComponentFixture<CuratorProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
