import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { SessionUserService } from '../services/session-user.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _userService: SessionUserService, private router: Router) {}
  canActivate() {
    if (!this._userService.isLoggedIn()) {
      this.router.navigate(['/notLoggedIn']);
    }
    return this._userService.isLoggedIn();
  }
}
