import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(public service:ServiceService){}

  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
    console.log(value)
	}

  timing: any[] = [
    {id:"9:00 am",time:"9:00 am - 9:30am"},
    {id:"9:30 am",time:"9:30 am - 10:00 am"},
    {id:"10:00 am",time:"10:00 am - 10:30 am"},
    {id:"10:30 am",time:"10:30 am - 11:00 am"},
    {id:"11:00 am",time:"11:00 am - 11:30 am"},
    {id:"11:30 am",time:"11:30 am - 12:00 pm"},
    {id:"12:00 pm",time:"12:00 pm - 12:30 pm"},
    {id:"1:30 pm",time:"1:30 pm - 1:30 pm"},
    {id:"2:00 pm",time:"2:00 pm - 2:30 pm"},
    {id:"2:30 pm",time:"2:30 pm - 3:00 pm"},
    {id:"3:00 pm",time:"3:00 pm - 3:30 pm"},
    {id:"3:30 pm",time:"3:30 pm - 4:00 pm"},
    {id:"4:00 pm",time:"4:00 pm - 4:30 pm"},
    {id:"4:30 pm",time:"4:30 pm - 5:00 pm"},
    {id:"5:00 pm",time:"5:00 pm - 5:30 pm"},
    {id:"5:30 pm",time:"5:30 pm - 6:00 pm"},
    {id:"6:00 pm",time:"6:00 pm - 6:30 pm"},
    {id:"6:30 pm",time:"6:30 pm - 7:00 pm"}
  ]

  patientOptions: any[] = []
  
  users(value:any){
    this.patientOptions = []
    for(var i=0;i<this.service.patientDetail.length;i++){
      if((this.service.patientDetail[i].mobileNumber).includes(value)){
        this.patientOptions.push(this.service.patientDetail[i])
      }
    }
  }

  profileForm = new FormGroup({
    dateOfAppointment: new FormControl(''),
    doctorName: new FormControl(''),
    time: new FormControl(''),
    patientDetails: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNumber: new FormControl(''),
    address: new FormControl('')
  });

  onSubmit(){
    for(var i=0;i<this.patientOptions.length;i++){
      if((this.patientOptions[i].mobileNumber)==(this.profileForm.value.patientDetails)){
        this.profileForm.patchValue({
          firstName: this.patientOptions[i].firstName,
          lastName: this.patientOptions[i].lastName,
          mobileNumber: this.patientOptions[i].mobileNumber,
          address: this.patientOptions[i].address
        })
      }
    }
    this.service.selectedPatient.push(this.profileForm.value)
    this.profileForm.reset();
  }

}
