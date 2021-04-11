// Imports modules.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Imports environments.
import { environment } from 'src/environments/environment';
import { knowledgeArea } from './interfaces/knowledgeArea.interfaces';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeAreaService {
  private readonly url: string = `${ environment.URL }/knowledgeAreas`;

  constructor(private http: HttpClient) {}

  list(): Observable<{ knowledgeAreas: knowledgeArea[] }> {
    return this.http.get<{
      knowledgeAreas: knowledgeArea[]
    }>(this.url);
  }
}
