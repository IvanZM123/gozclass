// Imports modules.
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';

// Imports helpers.
import { LocalStorage } from '../helpers/LocalStorage';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private storage: LocalStorage<any>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokens = this.storage.get(this.storage.TEAMANGULAR15_ACCESS_TOKEN);

    const tokenize = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${ tokens?.access_token }`)
    });

    return next.handle(tokenize);
  }
}
