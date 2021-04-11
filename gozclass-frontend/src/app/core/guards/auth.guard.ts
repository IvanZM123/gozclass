// Imports modules.
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports helpers.
import { LocalStorage } from '../helpers/LocalStorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private storage: LocalStorage<{}>,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const data = this.storage.get(this.storage.TEAMANGULAR15_ACCESS_TOKEN);
    if (!data) {
      this.storage.clear();
      this.router.navigate(["/auth/login"]);
      return false;
    }
    return true;
  }
}
