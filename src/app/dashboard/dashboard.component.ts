import { Component, OnInit } from "@angular/core";
import { CloseModalEventEmmiter } from "../models/modal.eventemitter.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  showPopup:boolean =true;
  openAddPatient:boolean;
  openAddMedicalAid:boolean;
  openAddEmengencyContact:boolean =true;
  constructor() { }

  ngOnInit() {}
  showAddPatientModal() {
    this.showPopup = true;
    this.openAddPatient = true;
  }
  closeModal(e:CloseModalEventEmmiter){
    console.log(e);

    if(e.closeAll){
      this.showPopup = false;
    }
    else if(e.openAddMedicalAid){
      this.openAddPatient = false;
      this.openAddMedicalAid = true;
    }
    else if(e.openAddEmengencyContact){
      this.openAddPatient = false;
      this.openAddMedicalAid = false;
      this.openAddEmengencyContact = true;
    }
  }
}
