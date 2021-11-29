import { Injectable } from '@angular/core';
import { User } from '../domain/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private userService: UserService) { }

  private user?: User = localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")!) : null;
  //Controlla username e password, se sono corretti li salva sia nella classe che nel local storage (return bool?)
  login(username: string, password: string): boolean {
    return true;
  }

  //Cancella l'utente sia dal local che dalla classe e redirect to login
  logout(): void {

  }

  //Validazione
  isLoggedIn(email: string, password: string): boolean {
    let success = this.userService.loginResult(email, password);
    return success;
  }

}
