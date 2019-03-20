import { QueeService } from "./../../../services/quee.service";
import { Patient } from "./../../../models/patient.model";
import { Component, OnInit } from "@angular/core";
import { PatientService } from "src/app/services";
import { Observable } from "rxjs";
import { BreadCrumb } from "../../bread-crumb/bread-crumb.model";
import { getCurrentUser } from "src/app/shared";
import { CloseModalEventEmmiter } from "src/app/models/modal.eventemitter.model";

@Component({
  selector: "app-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"]
})
export class PatientsComponent implements OnInit {
  UserId: string = getCurrentUser();
  searchText: any;
  showUpdatePopup: boolean;
  openUpdatePatient: boolean;
  openUpdateMedicalAid: boolean;
  openUpdateEmengencyContact: boolean;
  patient: Patient;

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
  constructor(
    private patientService: PatientService,
    private queeService: QueeService
  ) {}

  ngOnInit() {}
  quue(patient: Patient) {
    let data = {
      PatientName: `${patient.FirstName} ${patient.Surname}`,
      PatientId: patient.PatientId,
      Status: 1,
      CreateUserId: this.UserId
    };
    this.queeService.addQuee(data).subscribe(r => {
      alert(`Your ticket number: ${r}`);
    });
  }
  showEdit(patient: Patient) {
    this.patient = patient;
    this.showUpdatePopup = this.openUpdatePatient = true;
  }
    closeModal(e:CloseModalEventEmmiter){
    console.log(e);

    if(e.closeAll){
      this.showUpdatePopup = false;
    }
    else if(e.openAddMedicalAid){
      this.openUpdatePatient = false;
      this.openUpdateMedicalAid = true;
    }
    else if(e.openAddEmengencyContact){
      this.openUpdatePatient = false;
      this.openUpdateMedicalAid = false;
      this.openUpdateEmengencyContact = true;
    }
  }
}
