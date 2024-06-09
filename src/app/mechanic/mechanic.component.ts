import { Component, OnInit } from '@angular/core';
import { ReparationView } from './shared/ReparationView';
import { MechanicService } from './shared/mechanic.service';
import { UserService } from '../auth/shared/user.service';
import { NgFor, NgIf } from '@angular/common';

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

  constructor(private mechanicService: MechanicService, private userService: UserService){}

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


}
