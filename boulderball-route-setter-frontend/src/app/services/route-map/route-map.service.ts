import { Injectable } from '@angular/core';
import { of, Observable, ObservableInput } from 'rxjs';
import { RouteMapHold } from './route-map-hold';
import { RouteMapHoldShape } from './route-map-hold-shape';
import { RouteMapHoldColor } from './route-map-hold-color';
import { RouteMapDto } from './route-map.dto';

@Injectable({
  providedIn: 'root',
})
export class RouteMapService {
  constructor() {}
  getRouteMap(id: number): Observable<RouteMapDto> {
    return of(new RouteMapDto(id, 'My Test Route', [0, 5, 7, 9, 1, 52, 14, 10]));
  }

  static colorOfHold(hold: RouteMapHold): RouteMapHoldColor {
    if (hold in [1, 2, 4, 56]) {
      return RouteMapHoldColor.Blue;
    }
    return RouteMapHoldColor.Blue;
  }

  static shapeOfHold(hold: RouteMapHold): RouteMapHoldShape {
    if (hold < 10) {
      return RouteMapHoldShape.HexaIn;
    } else if (hold < 20) {
      return RouteMapHoldShape.HexaOut;
    } else if (hold < 26) {
      return RouteMapHoldShape.PentaIn;
    } else if (hold < 32) {
      return RouteMapHoldShape.PentaOut;
    } else if (hold < 42) {
      return RouteMapHoldShape.HexaPinch;
    } else if (hold < 52) {
      return RouteMapHoldShape.HexaCrack;
    } else {
      return RouteMapHoldShape.Dyno;
    }
  }
}
