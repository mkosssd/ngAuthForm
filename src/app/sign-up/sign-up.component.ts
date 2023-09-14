import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private auth:AuthService){}
  formOp(authFrom:NgForm) {
    let firstName = authFrom.value.firstName
    let lastName = authFrom.value.lastName
    let email = authFrom.value.email
    let password = authFrom.value.password
    const userData={
      firstName,
      lastName,
      email,
      password
    }
    this.auth.signUp(userData)
  }
}
