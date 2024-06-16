import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReparationNew } from '../shared/ReparationNew';
import { ScooterNew } from '../shared/ScooterNew';
import { IssueNew } from '../shared/IssueNew';
import { NgFor, NgIf } from '@angular/common';
import { MechanicService } from '../shared/mechanic.service';
import { from } from 'rxjs';

type IssueForm = FormGroup<{text: FormControl<string>}>

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
    reparationForm: FormGroup = new FormGroup({});


    constructor() { }
  
    scooterNew: ScooterNew = {
      scooterOwner : '', 
      brand : '', 
      model : '', 
      power : 1, 
    }

    issueNew: IssueNew = {
      name: '',
      hoursOfWork: 1
    }


    ngOnInit(): void {
  
      this.reparationForm = this.formBuilder.group({
        scooterOwner: new FormControl(''),
        brand: new FormControl(''),
        model: new FormControl(''),
        power: new FormControl(''),
        issues: this.formBuilder.array([])
      });
    }
  
    get issues() {
      return this.reparationForm.controls["issues"] as FormArray;
    }
  
    addIssue() {
      const issueForm = this.formBuilder.group({
          name: ['', Validators.required],
          hourOfWork: [1, [Validators.required, Validators.min(1)]]
      });
      this.issues.push(issueForm);
    }

    deleteIssue(issueIndex: number) {
      this.issues.removeAt(issueIndex);
    }

  

    onSubmit() {
    this.scooterNew.scooterOwner = this.reparationForm.value.scooterOwner;
    this.scooterNew.brand = this.reparationForm.value.brand;
    this.scooterNew.model = this.reparationForm.value.model;
    this.scooterNew.power = this.reparationForm.value.power;
// const formValues = this.reparationForm.value;
//     console.log(formValues);

//     const issuesArray = formValues.issues;
//       console.log('Array of Issues:', issuesArray);

    const issuesArray = this.reparationForm.get('issues') as FormArray;
    
    
    
    console.log(this.issues);
      const reparationNew: ReparationNew = {
        scooter: this.scooterNew,
        issues: issuesArray.value
      };
      console.log(reparationNew);
      this.mechaniService.createReparation(reparationNew).subscribe();
    }
    }

