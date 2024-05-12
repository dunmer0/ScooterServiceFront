import { Injectable } from '@angular/core';
import {User} from "./user";
import {FormControl, ɵValue} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registeredUsers: User[] = [
    new User('fanel', 'spargtot', 'Fane Spoitoru', 'fane@sparg.ro', 'user'),
    new User('gigel', 'repartot', 'Giga Contra', 'gica@alesul.ro','user'),
    new User('dorel', 'staudegeaba', 'Tudor Calmiara', 'tudor@cerneala.ro','user'),
    new User('ionel', 'undeemaria', 'Ion Carte', 'ion@pamant.ro','admin'),
  ];
  loggedUser: User[] = [];

  checkUser(username: string | null | undefined, password: string | null | undefined){
    let user = this.registeredUsers.find(user => user.username === username && user.password === password);
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
