import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {UserService} from "../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService,
              protected router:Router) {
  }
  forgotPassword=false;


  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });



  onSubmit() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.userService.checkUser(username,password);

    this.router.navigate(['/service']);

    console.log(username);
    this.loginForm.reset();

  }

  resetPassword() {
    console.log('The password reset value is: NULL')
  }
}
