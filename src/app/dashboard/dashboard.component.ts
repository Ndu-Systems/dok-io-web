import { Component, OnInit } from "@angular/core";
import { CloseModalEventEmmiter } from "../models/modal.eventemitter.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
<<<<<<< HEAD
  showPopup: boolean ;
  openAddPatient: boolean;
  openAddMedicalAid: boolean;
=======
  showPopup:boolean;
  openAddPatient:boolean;
  openAddMedicalAid:boolean;
>>>>>>> 207c0570f727c384c962e33b30b4a5df80876c9b
  openAddEmengencyContact:boolean;
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
