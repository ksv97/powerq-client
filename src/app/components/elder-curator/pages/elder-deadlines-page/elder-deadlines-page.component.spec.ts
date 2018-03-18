import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderDeadlinesPageComponent } from './elder-deadlines-page.component';

describe('ElderDeadlinesPageComponent', () => {
  let component: ElderDeadlinesPageComponent;
  let fixture: ComponentFixture<ElderDeadlinesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderDeadlinesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderDeadlinesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
