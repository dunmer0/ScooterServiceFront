import { Component, Input, OnInit, inject } from '@angular/core';
import { IssueView } from '../shared/IssueView';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
 

 getIssues(){
  this.mechanicService.issues();
 }
}
