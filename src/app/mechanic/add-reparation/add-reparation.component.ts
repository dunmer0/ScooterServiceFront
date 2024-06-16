import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReparationNew } from '../shared/ReparationNew';
import { ScooterNew } from '../shared/ScooterNew';
import { IssueNew } from '../shared/IssueNew';
import { NgFor, NgIf } from '@angular/common';
import { MechanicService } from '../shared/mechanic.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-reparation',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './add-reparation.component.html',
  styleUrl: './add-reparation.component.css'
})
export class AddReparationComponent implements OnInit {

    formBuilder = inject(FormBuilder);
    mechaniService = inject(MechanicService);
    router = inject(Router);


    constructor() { }
  
    scooterNew: ScooterNew = {
      scooterOwner : '', 
      brand : '', 
      model : '', 
      power : 1, 
      issueDescription: ''
    }

    issueNew: IssueNew = {
      name: '',
      hoursOfWork: 1
    }

    ngOnInit(): void {
      
    }

    reparationForm = this.formBuilder.group({
      scooterOwner: [''],
        brand: [''],
        model: [''],
        power: [''],
        issueDescription: [''],
        issues: this.formBuilder.array([])
    })

    get issues() {
      return this.reparationForm.controls["issues"] as FormArray;
    }

    addIssue() {
      this.issues.push(
        this.formBuilder.group({
          name: [''],
          hoursOfWork: [''],
        })
      );
    }

   
    deleteIssue(issueIndex: number) {
      this.issues.removeAt(issueIndex);
    }

    onCancel(){
      this.router.navigate(['/service']);
    }

    onSubmit() {
      const formValues = this.reparationForm.value;
    this.scooterNew.scooterOwner = formValues.scooterOwner ?? '';
    this.scooterNew.brand = formValues.brand ?? '';
    this.scooterNew.model = formValues.model ?? '';
    this.scooterNew.power = (formValues.power ?? 1) as number;
    this.scooterNew.issueDescription = formValues.issueDescription ?? ''

      const reparationNew: ReparationNew = {
        scooter: this.scooterNew,
        issues: formValues.issues as IssueNew[]
      };
      console.log(reparationNew);
      this.mechaniService.createReparation(reparationNew).subscribe();
      this.reparationForm.reset();
      this.router.navigate(['/service']);
    }
    }

