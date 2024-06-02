import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MechanicService {
  httpClient: HttpClient = inject(HttpClient);
  private url:string = 'https://localhost:7021/api/Reparation';
  constructor() { }
}
