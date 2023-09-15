import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  confirmPassword = '';
  inputPassword = '';
  constructor(private auth: AuthService) {}
  formOp(authFrom: NgForm) {
    let firstName = authFrom.value.firstName;
    let lastName = authFrom.value.lastName;
    let email = authFrom.value.email;
    let password = authFrom.value.inputPassword;
    console.log(password);
    const userData = {
      firstName,
      lastName,
      email,
      password,
    };
    this.auth.signUp(userData);
    
  }
  ifMatched:boolean= true
  passwordMatch() {
    if (this.confirmPassword === this.inputPassword) {
      this.ifMatched =true

    } else {
      this.ifMatched=false

    }
    this.isValid=  this.passwordRegex.test(this.inputPassword)
  }
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  isValid = false
 
}
