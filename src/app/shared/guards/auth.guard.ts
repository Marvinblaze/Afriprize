import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../storage/session.service';
import { AuthenticateService } from '../api/authentication/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  isadmin = true;


  constructor(
    private _router: Router,
    private _session: SessionService
  ) {}

  canActivate( ) {

    const user = sessionStorage.getItem('token');

    if (this.isadmin) {
      
      return true;
    } else{
      alert('you are not signed in')
      this._router.navigate(['login']);
      return false;
    }
  }
}
