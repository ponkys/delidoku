import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Film2018Component } from './film-2018.component';

describe('FilmsCategoriesComponent', () => {
  let component: Film2018Component;
  let fixture: ComponentFixture<Film2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Film2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Film2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
