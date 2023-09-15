import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users = localStorage.getItem('users') || '';
  objUsers = JSON.parse(this.users);
  user: any;
  signUp(userData: {}) {
    this.objUsers.push(userData);
    const strUsers = JSON.stringify(this.objUsers);
    localStorage.setItem('users', strUsers);
  }
  checkEmail(email: string) {
    if (this.objUsers.find((e: any) => e.email === email)) {
      this.user = this.objUsers.filter((e: any) => e.email === email)[0];
      return true;
    } else {
      return false;
    }
  }
  checkPassword(password: string) {
    if (password == this.user.password) {
      localStorage.setItem('curUser', JSON.stringify(this.user));
      return true;
    } else {
      return false;
    }
  }
}
