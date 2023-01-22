import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  email: string;
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.email = '';
  }

  login() {
    // Perform login here
    console.log(this.username, this.password);
  }

}
