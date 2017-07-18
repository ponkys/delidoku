import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelShowcaseComponent } from './parallel-showcase.component';

describe('ParallelShowcaseComponent', () => {
  let component: ParallelShowcaseComponent;
  let fixture: ComponentFixture<ParallelShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
