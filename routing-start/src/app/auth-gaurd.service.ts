import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './AuthService';
import {Injectable} from '@angular/core';
@Injectable()
export class AuthGaurdService implements CanActivate, CanActivateChild{

constructor(private authService: AuthService, private router: Router) {
}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getAuthenticationStatus().then((data: Boolean )=> {
      if (data) {
        return true;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }


}
