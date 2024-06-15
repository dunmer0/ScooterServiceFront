import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScooterService {
  private http: HttpClient = inject(HttpClient);
  private url: string = 'https://localhost:7021/api/Scooter';

  constructor() { }

  getScooterDetails(scooterId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${scooterId}`);
  }
}
