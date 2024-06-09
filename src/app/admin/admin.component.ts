import { Component } from '@angular/core';
import { AdminService } from './shared/admin.service';
import { MemberView } from './shared/MemberView';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

  goToReparations(){
    this.router.navigate(['admin/reparations']);
  }

  goToUsers(){
    this.router.navigate(['admin/user-management']);
  }

}