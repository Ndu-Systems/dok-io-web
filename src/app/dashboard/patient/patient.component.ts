import { PatientService } from "./../../services/patient.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadCrumb } from "../bread-crumb/bread-crumb.model";
import { discardPeriodicTasks } from "@angular/core/testing";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.scss"]
})
export class PatientComponent implements OnInit {
  patientData;
  items: Array<BreadCrumb> = [];
  patientId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) {
     this.activatedRoute.params.subscribe(r => {
      this.patientId = r["id"];
      this.getPatientDetails(this.patientId);
    });

    this.items = [
      {
        name: "PERSONAL DETAILS",
        url: `/dashboard/patient/${this.patientId}`,
        active: true
      },
      {
        name: "PRESCRIPTIONS",
        url: `/dashboard/patient-prescription/${this.patientId}`,
        active: false
      },
      {
        name: " APPOINTMENTS",
        url: "/dashboard",
        active: false
      }
    ];
  }

  ngOnInit() {}
  getPatientDetails(patientId: string) {
    this.patientService.getPatient(patientId).subscribe(r => {
      this.patientData = r;
    });
  }
}
