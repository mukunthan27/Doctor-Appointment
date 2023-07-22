import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  constructor(public service:ServiceService){}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNumber: new FormControl(''),
    address: new FormControl('')
  });

  onSubmit() {
    this.service.patientDetail.push(this.profileForm.value)
    this.profileForm.reset();
  }
}
