import {inject, Injectable} from '@angular/core';
import {LoginUser, User} from "./user";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient);

  registeredUsers: User[] = [
    new User('fanel', 'spargtot', 'Fane Spoitoru', 'fane@sparg.ro'),
    new User('gigel', 'repartot', 'Giga Contra', 'gica@alesul.ro'),
    new User('dorel', 'staudegeaba', 'Tudor Calmiara', 'tudor@cerneala.ro'),
    new User('ionel', 'undeemaria', 'Ion Carte', 'ion@pamant.ro'),
  ];
  loggedUser: User[] = [];

  loginUser(user:LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(this.url+'/login',user);
  }

  registerUser(user: User): Observable<User>{
    return this.http.post<User>(this.url+'/register',user);
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
