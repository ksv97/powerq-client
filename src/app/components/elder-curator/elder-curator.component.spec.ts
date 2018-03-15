import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderCuratorComponent } from './elder-curator.component';

describe('ElderCuratorComponent', () => {
  let component: ElderCuratorComponent;
  let fixture: ComponentFixture<ElderCuratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElderCuratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderCuratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
