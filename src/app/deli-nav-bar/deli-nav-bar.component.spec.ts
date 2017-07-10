import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliNavBarComponent } from './deli-nav-bar.component';

describe('DeliNavBarComponent', () => {
  let component: DeliNavBarComponent;
  let fixture: ComponentFixture<DeliNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
