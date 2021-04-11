// Imports modules.
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly url: string = `${ environment.URL }/users`;

  constructor(private http: HttpClient) {}

  upload(route: string, formdata: FormData): Observable<object> {
    const path: string = this.url + route;
    return this.http.patch(path, formdata);
  }
}
