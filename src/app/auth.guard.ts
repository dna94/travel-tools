import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  isLogged: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.isLogged = JSON.parse(localStorage.getItem("isLoggedIn")!)

    if (this.isLogged == true) {
      return true;
    }
    window.alert("Non sei loggato, logga prima di navigare in questa route. ");
    this.router.navigateByUrl('/login')
    return false;
  }

}
