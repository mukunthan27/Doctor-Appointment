import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(public service:ServiceService){}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    educationalQualification: new FormControl(''),
    yearsOfPractice: new FormControl('')
  });

  onSubmit(){
    this.service.doctorDetail.push(this.profileForm.value)
    this.profileForm.reset();
  }
}
