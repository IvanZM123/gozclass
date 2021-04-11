// Imports modules
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

// Imports interfaces.
import { Badge } from './interfaces/badge.interfaces';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private readonly url: string = `${ environment.URL }/badges`;

  constructor(private http: HttpClient) {}

  list(): Observable<{ badges: Badge[] }> {
    return this.http.get<{ badges: Badge[] }>(this.url);
  }

  getByUserId(userId: string): Observable<{ badges: Badge[] }> {
    const path: string = `${ environment.URL }/users/${ userId }/badges`;
    return this.http.get<{ badges: Badge[] }>(path);
  }
}
