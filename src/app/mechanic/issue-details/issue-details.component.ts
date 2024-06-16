import { Component, Input, OnInit, inject } from '@angular/core';
import { Location, NgFor } from '@angular/common';
import { MechanicService } from '../shared/mechanic.service';

@Component({
  selector: 'app-issue-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './issue-details.component.html',
  styleUrl: './issue-details.component.css'
})
export class IssueDetailsComponent {
 mechanicService = inject(MechanicService);
 issues = this.getIssues();
 
constructor(private location: Location){}

 getIssues(){
  this.mechanicService.issues();
 }

 goBack(){
  this.location.back();
}
}
