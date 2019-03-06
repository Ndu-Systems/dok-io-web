import { QueeService } from './../../../services/quee.service';
import { Patient } from "./../../../models/patient.model";
import { Component, OnInit } from "@angular/core";
import { PatientService } from "src/app/services";
import { Observable } from "rxjs";
import { BreadCrumb } from "../../bread-crumb/bread-crumb.model";
import { getCurrentUser } from "src/app/shared";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"]
})
export class PatientsComponent implements OnInit {
  UserId: string = getCurrentUser();
  searchText: any;

  p: number = 1;
  items: Array<BreadCrumb> = [
    {
      name: "ACTIVE PATIENTS",
      url: "/dashboard",
      active: true
    },
    {
      name: "INCOMPLETE PATIENTS",
      url: "/dashboard",
      active: false
    },
    {
      name: " ARCHIVED PATIENTS",
      url: "/dashboard",
      active: false
    }
  ];

  patients$: Observable<Array<any>> = this.patientService.getPatients();
  constructor(private patientService: PatientService, private queeService:QueeService) {}

  ngOnInit() {}
  quue(patient: Patient) {
    let data={
      PatientName:`${patient.FirstName} ${patient.Surname}`,
      PatientId: patient.PatientId,
      Status:1,
      CreateUserId:this.UserId
    }
    this.queeService.addQuee(data).subscribe(r=>{
      alert(`Your ticket number: ${r}`);
    })
  }
}


