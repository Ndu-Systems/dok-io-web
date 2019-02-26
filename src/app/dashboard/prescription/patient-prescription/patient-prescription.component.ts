import { Component, OnInit } from "@angular/core";
import { BreadCrumb } from "../../bread-crumb/bread-crumb.model";
import { ActivatedRoute } from "@angular/router";
import { PrescriptionService, PatientService } from "src/app/services";
import { Observable } from "rxjs";
import { Patient } from "src/app/models/patient.model";

@Component({
  selector: "app-patient-prescription",
  templateUrl: "./patient-prescription.component.html",
  styleUrls: ["./patient-prescription.component.scss"]
})
export class PatientPrescriptionComponent implements OnInit {
  items: Array<BreadCrumb> = [];
  patientId: string;
  prescriptions$: Observable<Array<any>>;
  patient: Patient;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prescriptionService: PrescriptionService,
    private patientService: PatientService
  ) {
    activatedRoute.params.subscribe(r => {
      this.patientId = r["id"];
      this.getPatientPrescriptions(this.patientId);
      this.getPatientDetails(this.patientId);
    });
    this.prescriptions$ = this.prescriptionService.getPatientPrescriptions(
      this.patientId
    );
    this.items = [
      {
        name: "PERSONAL DETAILS",
        url: `/dashboard/patient/${this.patientId}`,
        active: false
      },
      {
        name: "PRESCRIPTIONS",
        url: `/dashboard/patient-prescription/${this.patientId}`,
        active: true
      },
      {
        name: " APPOINTMENTS",
        url: "/dashboard",
        active: false
      }
    ];
  }

  ngOnInit() {}
  getPatientPrescriptions(patientId: string): any {
    // throw new Error("Method not implemented.");
  }
  getPatientDetails(patientId: string) {
    this.patientService.getPatient(patientId).subscribe(r => {
      this.patient = r;
    });
  }
}
