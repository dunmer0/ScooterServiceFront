import { Component } from '@angular/core';
import { MemberView } from '../shared/MemberView';
import { AdminService } from '../shared/admin.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Location } from '@angular/common';


@Component({
  selector: 'app-admin-user-approve',
  standalone: true,
  imports: [NgFor,NgIf,DatePipe],
  templateUrl: './admin-user-approve.component.html',
  styleUrl: './admin-user-approve.component.css'
})
export class AdminUserApproveComponent {
  members: MemberView[] = [];
  response: any;

  constructor(private adminService: AdminService, private location: Location) { }

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

  goBack(){
    this.location.back();
  }
}

