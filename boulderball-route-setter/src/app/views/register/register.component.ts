import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  email: string;
  username: string;
  passwordRegister: string;

  constructor() {
    this.username = '';
    this.passwordRegister = '';
    this.email = '';
  }

  register() {
    // Perform login here
    console.log(this.username, this.passwordRegister);
  }

}
