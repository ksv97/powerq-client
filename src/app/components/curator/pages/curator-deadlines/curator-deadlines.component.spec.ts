import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratorDeadlinesComponent } from './curator-deadlines.component';

describe('CuratorDeadlinesComponent', () => {
  let component: CuratorDeadlinesComponent;
  let fixture: ComponentFixture<CuratorDeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratorDeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratorDeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
