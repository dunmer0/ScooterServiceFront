import { Component, OnInit } from '@angular/core';
import { ReparationView } from './shared/ReparationView';
import { MechanicService } from './shared/mechanic.service';
import { NgFor, NgIf } from '@angular/common';
import { ReparationNew } from './shared/ReparationNew';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-mechanic',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './mechanic.component.html',
  styleUrl: './mechanic.component.css',
})
export class MechanicComponent implements OnInit{
  reparations: ReparationView[] = [];
  response: any;

  constructor(private mechanicService: MechanicService, private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mechanicService.getReparations().subscribe(data =>{
          this.reparations = data;
        })
      }
    });
  }

  ngOnInit(): void {
    this.mechanicService.getReparations().subscribe(data => {
      this.reparations = data;
      console.log(data)
    });
  }

  createReparation(reparation:ReparationNew){
    this.mechanicService.createReparation(reparation).subscribe();
  }

  deleteReparation(id: string){
    this.mechanicService.deleteReparation(id).subscribe();

  }

  goToAddReparation() {
    this.router.navigate(['service/add-reparation']);
  }

}
