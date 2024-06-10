import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberView } from './MemberView';
import { ReparationView } from '../../mechanic/shared/ReparationView';
import { ScooterView } from '../../mechanic/shared/ScooterView';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http:HttpClient = inject(HttpClient);
  private url:string = 'https://localhost:7021/api';

  constructor() { }

  getMembers(): Observable<MemberView[]> {
    return this.http.get<MemberView[]>(`${this.url}/Admin/members`);
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/Admin/delete-member/${id}`);
  }

  confirmAccount(id: string): Observable<string> {
    return this.http.post<string>(`${this.url}/Admin/confirm-account/${id}`, null);
  }

  rejectAccount(id: string): Observable<string> {
    return this.http.post<string>(`${this.url}/Admin/reject-account/${id}`, null);
  }

  getReparations(): Observable<ReparationView[]> {
    return this.http.get<ReparationView[]>(`${this.url}/Reparation`);
  }
}
