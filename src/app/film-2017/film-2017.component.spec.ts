import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Film2017Component } from './film-2017.component';

describe('FilmsComponent', () => {
  let component: Film2017Component;
  let fixture: ComponentFixture<Film2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Film2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
