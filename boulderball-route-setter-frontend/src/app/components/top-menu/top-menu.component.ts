import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less'],
})
export class TopMenuComponent {
  constructor() {}

  items = [
    {
      link: '/set-route',
      src: '../../../assets/hexagon-pink.svg',
      icon: 'construction',
    },
    {
      link: '/favorites',
      src: '../../../assets/hexagon-darkblue.svg',
      icon: 'star',
    },
    {
      link: '/search',
      src: '../../../assets/hexagon-orange.svg',
      icon: 'manage_search',
    },
  ];

  selectedIndex: number = 1;

  setSelected(index: number) {
    this.selectedIndex = index;
  }
}
