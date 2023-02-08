import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouteMapHold } from 'src/app/services/route-map/route-map-hold';

@Component({
  selector: 'app-route-hold',
  templateUrl: './route-hold.component.html',
  styleUrls: ['./route-hold.component.less'],
})
export class RouteHoldComponent {
  public image: string = '../../../assets/hexa-in.svg';

  private _routeMapHold: RouteMapHold = RouteMapHold.HexaBlueCrack;
  @Input()
  public get routMapHold() {
    return this._routeMapHold;
  }

  public set routMapHold(value: RouteMapHold) {
    this._routeMapHold = value;

    if (value == RouteMapHold.HexaBlueCrack) {
      this.image = '../../../assets/hexa-crack.svg';
    } else if (value == RouteMapHold.HexaBlueIn) {
      this.image = '../../../assets/hexa-in.svg';
    } else if (value == RouteMapHold.HexaBlueOut) {
      this.image = '../../../assets/hexa-out.svg';
    }
  }
}
