import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCuratorComponent } from './register-curator.component';

describe('RegisterCuratorComponent', () => {
  let component: RegisterCuratorComponent;
  let fixture: ComponentFixture<RegisterCuratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCuratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCuratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
