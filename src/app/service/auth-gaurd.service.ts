import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot){

    if(this.authenticationService.isUserLoggedIn())
      return true

    this.router.navigate(['login'])
    return false
  }
}
