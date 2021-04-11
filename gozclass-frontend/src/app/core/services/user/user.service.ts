// Imports modules.
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

// Imports interfaces.
import { ImageEditReponse, UserResponse } from "./interfaces/user.interfaces";

// Imports environments.
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url: string = `${ environment.URL }/users`;

  constructor(private http: HttpClient) {}

  update(id: string, data: any): Observable<UserResponse> {
    const path: string = `${ this.url }/${ id }`;
    return this.http.put<UserResponse>(path, data);
  }

  changeAvatar(userId: string, formdata: FormData): Observable<ImageEditReponse> {
    const path: string = `${ this.url }/${ userId }/avatar`;
    return this.http.patch<ImageEditReponse>(path, formdata);
  }

  changeBanner(userId: string, formdata: FormData): Observable<ImageEditReponse> {
    const path: string = `${ this.url }/${ userId }/banner`;
    return this.http.patch<ImageEditReponse>(path, formdata);
  }
}
