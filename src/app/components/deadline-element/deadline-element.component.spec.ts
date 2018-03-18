import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineElementComponent } from './deadline-element.component';

describe('DeadlineElementComponent', () => {
  let component: DeadlineElementComponent;
  let fixture: ComponentFixture<DeadlineElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadlineElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadlineElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
