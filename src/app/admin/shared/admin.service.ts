import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberView } from './MemberView';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private http:HttpClient = inject(HttpClient);
  private url:string = 'https://localhost:7021/api/Admin';

  constructor() { }

  getMembers(): Observable<MemberView[]> {
    return this.http.get<MemberView[]>(`${this.url}/members`);
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete-member/${id}`);
  }

  confirmAccount(id: string): Observable<string> {
    return this.http.post<string>(`${this.url}/confirm-account/${id}`, null);
  }

  rejectAccount(id: string): Observable<string> {
    return this.http.post<string>(`${this.url}/reject-account/${id}`, null);
  }
}
