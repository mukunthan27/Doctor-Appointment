import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { LandingComponent } from './landing/landing.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'app-patient', component: PatientComponent },
  { path: 'app-doctor', component: DoctorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
