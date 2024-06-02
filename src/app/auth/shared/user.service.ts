import {inject, Injectable} from '@angular/core';
import {LoginUser, User} from "./user";
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http:HttpClient = inject(HttpClient);
  private url:string = 'https://localhost:7021/api/Account';


  registerUser(user: User): Observable<User>{
    return this.http.post<User>(this.url+'/register',user);
  }
  loginUser(user:LoginUser): Observable<LoginUser> | Observable<any> {
    return this.http.post<LoginUser>(this.url+'/login',user).pipe(
      catchError(this.handleError)
    );
  }
  logoutUser(){
    localStorage.removeItem('token');
  }

  isLoggendIn(): boolean{
    return !!localStorage.getItem('token');
  }
  decodeToken(token: string): any {
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    }
  }
  isAdmin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        return this.decodeToken(token).role === 'Admin';
      } catch (error) {
        console.error('Error decoding token:', error);
        return false;
      }
    }
    return false;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      window.alert(error.error);
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
