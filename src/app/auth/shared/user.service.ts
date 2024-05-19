import {inject, Injectable} from '@angular/core';
import {LoginUser, User} from "./user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http:HttpClient = inject(HttpClient);
  private url:string = 'https://localhost:7021/api/Account';

  registeredUsers: User[] = [
    new User('fanel', 'spargtot', 'Fane Spoitoru', 'fane@sparg.ro', 'user'),
    new User('gigel', 'repartot', 'Giga Contra', 'gica@alesul.ro','user'),
    new User('dorel', 'staudegeaba', 'Tudor Calmiara', 'tudor@cerneala.ro','user'),
    new User('ionel', 'undeemaria', 'Ion Carte', 'ion@pamant.ro','admin'),
  ];
  loggedUser: User[] = [];

  loginUser(user:LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(this.url+'/login',user);
  }

  checkUser(username: string | null | undefined, password: string | null | undefined){
    let user = this.registeredUsers.find(user => user.username === username && user.passwordHash === password);
    if (user) {
      this.loggedUser.push(user);
      console.log(this.loggedUser);
      // this.router.navigate(['/service']);
    } else {
      window.alert("Incorrect username or password");
    }
  }

  isLoggendIn(): boolean{
    if (this.loggedUser.length === 1) {
      return true;
    } else {
      return false;
    }
  }
  constructor(private router:Router) { }
}
