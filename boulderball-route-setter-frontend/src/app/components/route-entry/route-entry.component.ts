import { Component } from '@angular/core';

@Component({
  selector: 'app-route-entry',
  templateUrl: './route-entry.component.html',
  styleUrls: ['./route-entry.component.less'],
})
export class RouteEntryComponent {
  sliderLow: number = 1;
  sliderHigh: number = 7;
  searchText: string = '';

  items = [
    { grade: 4, name: 'Buch 1', author: 'Autor 1' },
    { grade: 5, name: 'Buch 2', author: 'Autor 2' },
    { grade: 2, name: 'Buch 2', author: 'Autor 1' },
    { grade: 3, name: 'Buch 2', author: 'Autor 2' },
    { grade: 5, name: 'Buch 2', author: 'Autor 3' },
    { grade: 1, name: 'Buch 3', author: 'Autor 3' },
  ];

  filteredItems = this.items;

  selectColor(grade: number) {
    switch (grade) {
      case 1:
        return '#74C145';
        break;
      case 2:
        return '#DD2B8D';
        break;
      case 3:
        return '#022055';
        break;
      case 4:
        return '#F89321';
        break;
      case 5:
        return '#0AA8DE';
        break;
      case 6:
        return '#995B29';
        break;
      case 7:
        return '#018E78';
        break;
      default:
        return '#fff';
        break;
    }
  }

  filterRoutes() {
    let searchTextLowerCase = this.searchText.toLowerCase();

    this.filteredItems = this.items.filter((item) => {
      return (
        item.grade >= this.sliderLow &&
        item.grade <= this.sliderHigh &&
        (item.name.toLocaleLowerCase().includes(searchTextLowerCase) ||
          item.author.toLocaleLowerCase().includes(searchTextLowerCase))
      );
    });
  }

  sliderLowChange(Low: number) {
    this.sliderLow = Low;
    this.filterRoutes();
  }

  sliderHighChange(High: number) {
    this.sliderHigh = High;
    this.filterRoutes();
  }
}
