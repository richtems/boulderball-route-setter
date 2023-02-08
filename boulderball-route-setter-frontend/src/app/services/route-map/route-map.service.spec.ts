import { TestBed } from '@angular/core/testing';

import { RouteMapService } from './route-map.service';

describe('RouteMapService', () => {
  let service: RouteMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
