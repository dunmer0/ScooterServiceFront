import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { ReparationView } from './ReparationView';
import { Observable } from 'rxjs';
import { IssueView } from './IssueView';

@Injectable({
  providedIn: 'root',
})
export class MechanicService {
  public issues = signal<IssueView[]>([]);

  private http: HttpClient = inject(HttpClient);
  private url: string = 'https://localhost:7021/api/Reparation';

  constructor() {}

  getReparations(): Observable<ReparationView[]> {
    return this.http.get<ReparationView[]>(`${this.url}`);
  }

  createReparation(reparation: ReparationView): Observable<ReparationView> {
    return this.http.post<ReparationView>(`${this.url}`, null)
  }

  deleteReparation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  confirmAccount(id: string): Observable<string> {
    return this.http.post<string>(`${this.url}/confirm-account/${id}`, null);
  }

  rejectAccount(id: string): Observable<string> {
    return this.http.post<string>(`${this.url}/reject-account/${id}`, null);
  }

  getIssuesByReparationId(reparationId: string) {
  this.http.get<ReparationView>(`${this.url}/${reparationId}`).subscribe(response =>{
    this.issues.set(response.issues);
    console.log(response);
  })
  };
  // return this.http.get<any[]>(`${this.url}/${reparationId}`);
  }
  
