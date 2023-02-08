import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHoldComponent } from './route-hold.component';

describe('RouteHoldComponent', () => {
  let component: RouteHoldComponent;
  let fixture: ComponentFixture<RouteHoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteHoldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteHoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
