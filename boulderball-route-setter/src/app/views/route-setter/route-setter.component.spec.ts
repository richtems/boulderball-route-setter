import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSetterComponent } from './route-setter.component';

describe('RouteSetterComponent', () => {
  let component: RouteSetterComponent;
  let fixture: ComponentFixture<RouteSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
