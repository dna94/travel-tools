import { Injectable } from '@angular/core';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private user?: User = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  //Controlla username e password, se sono corretti li salva sia nella classe che nel local storage (return bool?)
  login(username: string, password: string): boolean {
    return true;
  }

  //Cancella l'utente sia dal local che dalla classe e redirect to login
  logout(): void {

  }

  //Validazione
  isLoggedIn(): boolean {
    return true;
  }

  constructor() { }
}
