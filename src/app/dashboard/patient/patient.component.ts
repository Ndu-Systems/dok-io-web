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
  items: Array<BreadCrumb> = [
    {
      name: "PERSONAL DETAILS",
      url: "/dashboard",
      active: true
    },
    {
      name: "PRESCRIPTIONS",
      url: "/dashboard",
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
    activatedRoute.params.subscribe(r => {
      let patientId = r["id"];
      this.getPatientDetails(patientId);
    });
  }

  ngOnInit() {}
  getPatientDetails(patientId: string) {
    this.patientService.getPatient(patientId).subscribe(r => {
      this.patientData = r;
    });
  }
}
