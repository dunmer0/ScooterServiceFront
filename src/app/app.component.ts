import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, LoginComponent, RegisterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scooter-service-app';
  loadedFeature:string = 'login';

  constructor(protected router:Router) {
  }


  onNavigate(feature: string) {
      this.loadedFeature = feature;
  }
}
