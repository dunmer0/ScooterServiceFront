import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScooterService } from '../shared/scooter.service';
import { ScooterView } from '../shared/ScooterView';
import { Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-scooter-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scooter-details.component.html',
  styleUrl: './scooter-details.component.css'
})
export class ScooterDetailsComponent implements OnInit{
  scooterId: number = 0;
  scooter: ScooterView | undefined;

  constructor(
    private route: ActivatedRoute,
    private scooterService: ScooterService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.route.paramMap.subscribe(params => {
        const idParam = params.get('id');
        if (idParam) {
          this.scooterId = +idParam; // Convert the string to a number
          this.fetchScooterDetails();
        } else {
          console.error('ID parameter is not found in route');
        }
      });
    });
  }

  fetchScooterDetails(): void {
    this.scooterService.getScooterDetails(this.scooterId).subscribe(details => {
      this.scooter = details;
    });
  }

  goBack(){
    this.location.back();
  }
}
