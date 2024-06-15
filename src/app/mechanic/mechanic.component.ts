import { Component, OnInit } from '@angular/core';
import { ReparationView } from './shared/ReparationView';
import { MechanicService } from './shared/mechanic.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ScooterView } from './shared/ScooterView';
import { IssueView } from './shared/IssueView';

@Component({
  selector: 'app-mechanic',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.css',
})
export class MechanicComponent implements OnInit{
  reparations: ReparationView[] = [];
  issues: IssueView[] = [];
  response: any;

  constructor(private mechanicService: MechanicService, private router: Router){
  }

  ngOnInit(): void {
    this.mechanicService.getReparations().subscribe(data => {
      this.reparations = data;
    });
  }

  createReparation(reparation:ReparationView){
    this.mechanicService.createReparation(reparation).subscribe();
  }

  deleteReparation(id: string){
    this.mechanicService.deleteReparation(id).subscribe();

  }

  goToScooterDetails(scooterId: string): void {
    this.router.navigate(['service/scooter', scooterId]);
  }

  goToIssuesDetails(reparationId:string): void {
    this.mechanicService.getIssuesByReparationId(reparationId);
    this.router.navigate(['service/issues'],  { state: { issues: this.issues } });
  }

}
