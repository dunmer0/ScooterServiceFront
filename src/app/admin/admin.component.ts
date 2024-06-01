import { Component } from '@angular/core';
import { AdminService } from './shared/admin.service';
import { MemberView } from './shared/MemberView';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NgFor, NgIf, DatePipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  members: MemberView[] = [];
  response: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getMembers().subscribe(data => {
      this.members = data;
    });
  }

  deleteMember(id: string): void {
    this.adminService.deleteMember(id).subscribe(() => {
      this.members = this.members.filter(member => member.id !== id);
    });
  }

  confirmAccount(id: string): void {
    this.adminService.confirmAccount(id).subscribe(response => {
      this.response = response;
      window.alert(this.response.value.message);
      const member = this.members.find(m => m.id === id);
      if (member) {
        member.accountStatus = 'Confirmed';
      }
    });
  }

  rejectAccount(id: string): void {
    this.adminService.rejectAccount(id).subscribe(response => {
      this.response = response;
      console.log(response);
      window.alert(this.response.value.message);
      const member = this.members.find(m => m.id === id);
      if (member) {
        member.accountStatus = 'Rejected';
      }
    });
  }
}
