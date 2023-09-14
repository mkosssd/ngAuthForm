import { Injectable } from '@angular/core';
@Injectable({
    providedIn:'root'
})
export class AuthService {
  signUp(userData: {}) {
    const users = localStorage.getItem('users') || '';
    const objUsers = JSON.parse(users);
    objUsers.push(userData);
    const strUsers = JSON.stringify(objUsers);
    localStorage.setItem('users', strUsers);
  }
}
