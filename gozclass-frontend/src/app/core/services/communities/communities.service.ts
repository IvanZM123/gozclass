// Imports modules.
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

// Imports environments.
import { environment } from "src/environments/environment";

// Imports interfaces.
import { Community } from "./interfaces/community.interfaces";

@Injectable({
  providedIn: "root"
})
export class CommunitiesService {
  private readonly url: string = `${ environment.URL }/communities`;

  constructor(private http: HttpClient) {}

  list(): Observable<{ communities: Community[] }> {
    return this.http.get<{ communities: Community[] }>(this.url);
  }
}
