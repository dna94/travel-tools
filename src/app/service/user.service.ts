import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []
  user!: User

  constructor(
  ) { }

  addUser(user: User): void {
    localStorage.setItem(user.email, JSON.stringify(user));
    console.log("Added to the local storage: ", user);
  }

  /*
  getUsers(): User[] {

  }
  */

  getUserByMail(email: string): User {
    return localStorage.getItem(email) ? JSON.parse(localStorage.getItem(email)!) : null;
  }

  loginResult(email: string, password: string): boolean {
    //let user = localStorage.getItem(email) ? JSON.parse(localStorage.getItem(email)!) : null;
    let user = this.getUserByMail(email)
    if ((user) && (user.email == email) && (user.password == password)) {
      localStorage.setItem("isLoggedIn", "true")
      return true
    } else return false
  }
}
