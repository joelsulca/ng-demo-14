import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
} from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UnloggedGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('demo.token');
    if (!token) {
      return true;
    }

    this._router.navigateByUrl('/clients');
    return false;
  }
}
