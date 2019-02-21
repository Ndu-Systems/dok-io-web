import { PatientPrescriptionComponent } from './prescription/patient-prescription/patient-prescription.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { PatientsComponent } from './Patient/patients/patients.component';
import { PatientComponent } from './Patient/patient-details/patient.component';
import { AddPatientComponent } from './Patient/add-patient/add-patient.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "dashboard", component: PatientsComponent },
      { path: "", component: PatientsComponent },
      { path: "patient/:id", component: PatientComponent },
      { path: "patient-prescription/:id", component: PatientPrescriptionComponent },
    ]
  }
];
export const declarations: Array<any> = [
  DashboardComponent,
  DashboardHomeComponent,
  PatientsComponent,
  PatientComponent,
  BreadCrumbComponent,
  AddPatientComponent,
  PatientPrescriptionComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
