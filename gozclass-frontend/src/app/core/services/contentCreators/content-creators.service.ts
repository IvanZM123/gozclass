// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

// Imports interfaces.
import { ContentCreatorListRes } from './interfaces/contentCreators.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContentCreatorsService {
  private url: string = `${ environment.URL }/contentCreators`;

  constructor(private http: HttpClient) {}

  list(): Observable<ContentCreatorListRes> {
    return this.http.get<ContentCreatorListRes>(this.url);
  }
}
