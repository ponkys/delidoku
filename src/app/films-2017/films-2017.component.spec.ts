import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Films2017Component } from './films-2017.component';

describe('FilmsComponent', () => {
  let component: Films2017Component;
  let fixture: ComponentFixture<Films2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Films2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Films2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
