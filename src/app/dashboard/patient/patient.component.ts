import { PatientService } from "./../../services/patient.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadCrumb } from "../bread-crumb/bread-crumb.model";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {
  
  patientData;
  patientId;
  items: Array<BreadCrumb> = [
    {
      name: "PERSONAL DETAILS",
      url: "/dashboard",
      active: true
    },
    {
      name: "PRESCRIPTIONS",
      url: `/dashboard`,
      active: false
    },
    {
      name: " APPOINTMENTS",
      url: "/dashboard",
      active: false
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) {
    this.activatedRoute.params.subscribe(r => {
      this.patientId = r["id"];
      this.getPatientDetails(this.patientId);
    });
  }

  ngOnInit() { }
  getPatientDetails(patientId: string) {
    this.patientService.getPatient(patientId).subscribe(r => {
      this.patientData = r;
    });
  }

  
}
