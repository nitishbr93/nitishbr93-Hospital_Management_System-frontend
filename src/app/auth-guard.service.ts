import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //If token data exist, user may login to application
  if (localStorage.getItem('token')) {
  return true;
  }
 
  // otherwise redirect to login page with the return url
  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
  } 

}
