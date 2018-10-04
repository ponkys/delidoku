import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerFullScreenComponent } from './trailer-full-screen.component';

describe('TrailerFullScreenComponent', () => {
  let component: TrailerFullScreenComponent;
  let fixture: ComponentFixture<TrailerFullScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerFullScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
