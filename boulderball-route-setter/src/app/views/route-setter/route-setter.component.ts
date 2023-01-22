import { Component } from '@angular/core';

@Component({
  selector: 'app-route-setter',
  templateUrl: './route-setter.component.html',
  styleUrls: ['./route-setter.component.less']
})
export class RouteSetterComponent {

  addHex() {
    console.log('Add Hexagon');
  }

}
