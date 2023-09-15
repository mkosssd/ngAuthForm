import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.scss'],
})
export class SignupReactiveComponent implements OnInit {
  constructor(private auth: AuthService) {}
  authForm: FormGroup;
  confirmPassword = '';
  inputPassword = '';
  ifMatched: boolean = true;
  passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  isValid = false;
  numEx = /^[A-Za-z]+$/;
  ngOnInit(): void {
    this.authForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numEx),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numEx),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      inputPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.passwordRegex),
      ]),
      confirmPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.passwordRegex),
      ]),
    });
  }

  onSubmit() {
    console.log(this.authForm);
    this.auth.signUp(this.authForm.value);
    this.authForm.reset();
  }

  passwordMatch() {
    if (this.confirmPassword === this.inputPassword) {
      this.ifMatched = true;
    } else {
      this.ifMatched = false;
    }
  }
}
