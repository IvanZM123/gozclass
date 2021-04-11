// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

// Imports interfaces.
import { Event } from './interfaces/events.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly url: string = `${ environment.URL }/events`;

  constructor(private http: HttpClient) {}

  list(): Observable<{ events: Event[] }> {
    return this.http.get<{ events: Event[] }>(this.url);
  }

  listByUser(userId: string): Observable<{ events: Event[] }> {
    const path: string = `${ environment.URL }/users/${ userId }/events`;
    return this.http.get<{ events: Event[] }>(path);
  }

  addUserToEvent(eventId: string, userId: string): Observable<{ message: string }> {
    const path: string = `${ this.url }/${ eventId }/users`;
    return this.http.post<{ message: string }>(path, { userId });
  }

  removeUserFromEvent(eventId: string, userId: string): Observable<{ message: string }> {
    const path: string = `${ this.url }/${ eventId }/users/${ userId }`;
    return this.http.delete<{ message: string }>(path);
  }
}
