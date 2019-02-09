import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { PatientsComponent } from "./patients/patients.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { PatientComponent } from "./patient/patient.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "dashboard", component: PatientsComponent },
      { path: "", component: PatientsComponent },
      { path: "patient/:id", component: PatientComponent }
    ]
  }
];
export const declarations: Array<any> = [
  DashboardComponent,
  DashboardHomeComponent,
  PatientsComponent,
  PatientComponent,
  BreadCrumbComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
