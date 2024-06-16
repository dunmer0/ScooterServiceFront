import { Component, inject, OnInit } from '@angular/core';
import { MechanicService } from './shared/mechanic.service';
import { ReparationStatus, ReparationView } from './shared/ReparationView';

import { Router } from '@angular/router';

import { NgClass, NgFor, NgIf } from '@angular/common';
import { IssueView } from './shared/IssueView';
import {StatusPipePipe} from "../pipes/status-pipe.pipe";



@Component({
  selector: 'app-mechanic',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, StatusPipePipe],
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.css',
})
export class MechanicComponent implements OnInit {
  reparations: ReparationView[] = [];

  issues: IssueView[] = [];
  response: any;

  constructor(private mechanicService: MechanicService, private router: Router) {
  }


  ngOnInit(): void {
    this.mechanicService.getReparations().subscribe(data => {
      this.reparations = data;
    });
  }

  createReparation(reparation: ReparationView) {
    this.mechanicService.createReparation(reparation).subscribe();
  }

  deleteReparation(id: string) {
    this.mechanicService.deleteReparation(id).subscribe(response => {
      this.reparations = this.reparations.filter(reparation => reparation.id !== id)
    });
    
  }

  goToScooterDetails(scooterId: string): void {
    this.router.navigate(['service/scooter', scooterId]);
  }

  goToIssuesDetails(reparationId: string): void {
    this.mechanicService.getIssuesByReparationId(reparationId);
    this.router.navigate(['service/issues'], { state: { issues: this.issues } });
  }

  onChaneStatus(reparationView: ReparationView) {
    let status: number = +reparationView.status;
    if (status == 2) {
      status = 0;
    } else {
      status++;
    }
    let reparationStatus: ReparationStatus = {
      id: +reparationView.id,
      status: status
    }
    this.mechanicService.updateReperationStatus(reparationStatus).subscribe(response => {
      this.mechanicService.getReparations().subscribe(data => {
        this.reparations = data;
      });
    });

    console.log(reparationStatus);
  }
}
