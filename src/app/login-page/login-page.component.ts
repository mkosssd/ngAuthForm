import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private auth: AuthService,private router:Router) {}
  error:string=''
  isEmail = true;
  formOp(authFrom: NgForm) {
    let email = authFrom.value.email;
    let password = authFrom.value.password;
    if (email) {
      if (this.auth.checkEmail(email)) {
        this.isEmail = false;
        authFrom.reset();
        this.error= ''
      }else{
        this.error= 'User not found'
      }
      console.log(email);
    } else {
      if (this.auth.checkPassword(password)) {
        console.log('password matched');
        this.router.navigate(['/userInfo'])
        this.error = ''
      }else{
        this.error = 'Incorrect Password'
      }
    }
  }
}
