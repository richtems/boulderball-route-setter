import { Component } from '@angular/core';
import { TestService } from '../../services/test/test.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.less'],
})
export class StartpageComponent {
  data: any;
  constructor(private testService: TestService) {
    this.testService.getUsers().subscribe((users: any) => {
      this.data = users;
    });
  }
}
