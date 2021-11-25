import { Injectable } from '@angular/core';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = []
  user!: User

  constructor() { }

  addUser(user: User): void {
    localStorage.setItem(user.email, JSON.stringify(user));
    console.log("Added to the local storage: ", user);
  }

  /*
  getUsers(): User[] {

  }
  */

  getUserByMail(email: string): User {
    return localStorage.getItem(email) ? JSON.parse(localStorage.getItem(email)!) : null
  }
}
