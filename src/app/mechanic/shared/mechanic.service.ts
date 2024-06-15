import { HttpClient } from '@angular/common/http';

import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueView } from './IssueView';
import { ReparationStatus, ReparationView } from './ReparationView';

@Injectable({
  providedIn: 'root',
})
export class MechanicService {
  public issues = signal<IssueView[]>([]);

  private http: HttpClient = inject(HttpClient);
  private url: string = 'https://localhost:7021/api/Reparation';

  constructor() { }

  getReparations(): Observable<ReparationView[]> {
    return this.http.get<ReparationView[]>(`${this.url}`);
  }

  createReparation(reparation: ReparationView): Observable<ReparationView> {
    return this.http.post<ReparationView>(`${this.url}`, null)
  }

  deleteReparation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  updateReperationStatus(status: ReparationStatus): Observable<ReparationView> {
    return this.http.put<ReparationView>(this.url, status);
  }



  getIssuesByReparationId(reparationId: string) {
    this.http.get<ReparationView>(`${this.url}/${reparationId}`).subscribe(response => {
      this.issues.set(response.issues);
      console.log(response);
    })
  }

}
