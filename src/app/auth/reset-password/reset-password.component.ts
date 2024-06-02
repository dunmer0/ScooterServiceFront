import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  route =inject(ActivatedRoute);

  ngOnInit(){
    console.log(this.route.snapshot.queryParamMap.get('token'));
  }
}
