import { Component, OnInit } from "@angular/core";
import { BreadCrumb } from "../../bread-crumb/bread-crumb.model";
import { ActivatedRoute, Router } from "@angular/router";
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
  showAddPrescriptionModal ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prescriptionService: PrescriptionService,
    private patientService: PatientService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(r => {
      this.patientId = r["id"];       
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

  ngOnInit() { }
 
  getPatientDetails(patientId: string) {
    this.patientService.getPatient(patientId).subscribe(r => {
      this.patient = r;
    });
  }

  viewPrescription(prescription) {
    this.router.navigate([`/dashboard/view-prescription/${prescription.prescriptionId}`]);
  }
  openModal(){
    this.showAddPrescriptionModal = true;
  }
  closeModal(e){
    if(e){
      this.showAddPrescriptionModal = false;
      this.prescriptions$ = this.prescriptionService.getPatientPrescriptions(this.patientId);
    }
  }
}
