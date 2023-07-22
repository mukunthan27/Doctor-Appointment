import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  patientDetail : any[] = [
    {firstName: 'Mukunthan', lastName: 'M', mobileNumber: "9498859450", address: '20,Palayakovil street,\nPalakarai,\nTrichy'},
    {firstName: 'Mohammed Ammar', lastName: 'P M', mobileNumber: "9890909786", address: 'No 20,Kajamaalai Trichy'},
    {firstName: 'Barani Dharan', lastName: 'S', mobileNumber: "9490909960", address: 'No 15,Tolgate Trichy'}
  ];
  doctorDetail: any[] = [
    {firstName: 'Rahul', lastName: 'K', educationalQualification: 'MBBS', yearsOfPractice: '5'},
    {firstName: 'Kumar', lastName: 'S', educationalQualification: 'MBBS', yearsOfPractice: '3'},
    {firstName: 'Sachin', lastName: 'M', educationalQualification: 'MBBS', yearsOfPractice: '7'}
  ];
  selectedPatient: any[] = [];
  constructor() { }
}
