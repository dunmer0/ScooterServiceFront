import { Component, OnInit} from '@angular/core';
import { ReparationView } from '../../mechanic/shared/ReparationView';
import { AdminService } from '../shared/admin.service';
import { Location, NgClass, NgFor, NgIf } from '@angular/common';
import { MemberView } from '../shared/MemberView';
import {StatusPipePipe} from "../../pipes/status-pipe.pipe";

@Component({
  selector: 'app-admin-reparations',
  standalone: true,
    imports: [NgIf, NgFor, NgClass, StatusPipePipe],
  templateUrl: './admin-reparations.component.html',
  styleUrl: './admin-reparations.component.css'
})
export class AdminReparationsComponent implements OnInit{
  reparations: ReparationView[] = [];
  members: MemberView[] = [];
  response: any;
  selectedTab = 1;
  selectedReparation: ReparationView | null = null;

  constructor(private adminService: AdminService, private location: Location){}

  ngOnInit(): void {
    this.adminService.getReparations().subscribe(data => {
      this.reparations = data;
    });
      this.adminService.getMembers().subscribe(data => {
        this.members = data;
    });
  }

  goBack(){
    this.location.back();
  }

  selectReparation(reparation: ReparationView){
    this.selectedReparation = reparation;
  }

}
