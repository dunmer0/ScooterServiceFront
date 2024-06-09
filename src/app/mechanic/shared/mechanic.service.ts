import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ReparationView } from './ReparationView';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MechanicService {
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
}
