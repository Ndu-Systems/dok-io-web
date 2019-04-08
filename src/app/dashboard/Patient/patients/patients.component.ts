import { QueeService } from "./../../../services/quee.service";
import { Patient } from "./../../../models/patient.model";
import { Component, OnInit } from "@angular/core";
import { PatientService } from "src/app/services";
import { Observable } from "rxjs";
import { BreadCrumb } from "../../bread-crumb/bread-crumb.model";
import { getCurrentUser } from "src/app/shared";
import { CloseModalEventEmmiter } from "src/app/models/modal.eventemitter.model";
import { MessageService } from "primeng/api";

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
  actionString: string = "John doe Is about to be archived";

  p: number = 1;
  items: Array<BreadCrumb> = [
    {
      name: "ACTIVE PATIENTS",
      url: "/dashboard",
      active: true
    },
    // {
    //   name: "INCOMPLETE PATIENTS",
    //   url: "/dashboard",
    //   active: false
    // },
    {
      name: " ARCHIVED PATIENTS",
      url: "/dashboard/archived",
      active: false
    }
  ];

  patients$: Observable<Array<any>> = this.patientService.getPatients();
  showConfirm: boolean;
  constructor(
    private patientService: PatientService,
    private queeService: QueeService,
    private messageService: MessageService
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
      this.popMessage(
        "success",
        "Added to quee",
        `Your ticket number: ${r}`
      );
    });
  }
  showEdit(patient: Patient) {
    this.patient = patient;
    this.showUpdatePopup = this.openUpdatePatient = true;
  }
  closeModal(e: CloseModalEventEmmiter) {
    console.log(e);
    this.closeAll();

    if (e.closeAll) {
      this.showUpdatePopup = false;
      this.patients$ = this.patientService.getPatients();
    } else if (e.openAddMedicalAid) {
      this.openUpdatePatient = false;
      this.openUpdateMedicalAid = true;
    } else if (e.openAddEmengencyContact) {
      this.openUpdatePatient = false;
      this.openUpdateMedicalAid = false;
      this.openUpdateEmengencyContact = true;
    } else if (e.openAddPatient) {
      this.openUpdatePatient = true;
      this.openUpdateMedicalAid = false;
      this.openUpdateEmengencyContact = false;
    } else if (e.closeConfirm) {
      this.showConfirm = false;
    } else if (e.actionConfirmed) {
      this.showConfirm = false;
      this.archive();
    }
  }
  closeAll() {
    this.openUpdatePatient = false;
    this.openUpdateMedicalAid = false;
    this.openUpdateEmengencyContact = false;
    this.showConfirm = false;
  }

  confirmArchive(patient: Patient) {
    this.showConfirm = true;
    this.actionString = `${patient.FirstName} ${
      patient.Surname
    } Is about to be archived`;
    this.patient = patient;
  }
  archive() {
    this.patient.StatusId = 2;
    this.patient.CreateUserId = this.UserId;
    this.patientService.updatePatient(this.patient).subscribe(r => {
      this.patients$ = this.patientService.getPatients();

      // alert(`${this.patient.FirstName } archived!`)
      this.popMessage(
        "warn",
        "Transiction saved",
        `${this.patient.FirstName} archived!`
      );
    });
  }
  popMessage(severity, summary, detail) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
    //    this.popMessage('warn','Transiction saved',`${this.patient.FirstName } archived!`);
  }
}
