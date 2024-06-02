import {Component, EventEmitter, inject, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {UserService} from "../auth/shared/user.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() selected = new EventEmitter<string>();
  userService = inject(UserService);
  location = inject(Location);

constructor(protected router:Router) {}

  onSelected(selected: string) {
    this.selected.emit(selected);
  }

  logout() {
   this.userService.logoutUser();
   this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
