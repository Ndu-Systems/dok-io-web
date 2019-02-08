import { PatientsComponent } from './patients/patients.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,children:[
    {path:'', component:PatientsComponent}
  ]}
];
export const declarations:Array<any> =[DashboardComponent,DashboardHomeComponent, PatientsComponent]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
