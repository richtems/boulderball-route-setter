// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  username: string;
  password: string;
  value: string;

  constructor() {
    this.username = '';
    this.password = '';
    this.value = '';
  }

  login() {
    // Perform login here
    console.log(this.username, this.password);
  }
}
