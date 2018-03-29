import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterElderComponent } from './register-elder.component';

describe('RegisterElderComponent', () => {
  let component: RegisterElderComponent;
  let fixture: ComponentFixture<RegisterElderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterElderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterElderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
