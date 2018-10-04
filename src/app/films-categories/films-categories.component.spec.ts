import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsCategoriesComponent } from './films-categories.component';

describe('FilmsCategoriesComponent', () => {
  let component: FilmsCategoriesComponent;
  let fixture: ComponentFixture<FilmsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
