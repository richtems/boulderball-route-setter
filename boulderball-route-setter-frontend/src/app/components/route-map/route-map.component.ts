import { Component } from '@angular/core';
import { RouteMapHold } from 'src/app/services/route-map/route-map-hold';

@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.less'],
})
export class RouteMapComponent {
  public holds: RouteMapHold[] = [
    RouteMapHold.HexaBlueCrack,
    RouteMapHold.HexaBlueIn,
    RouteMapHold.HexaBlueOut,
  ];
  public positionsX: number[] = [0, 10, 20];
  public positionsY: number[] = [0, 5, 10];
}
