import { QueeService } from './../services/quee.service';
import { Component, OnInit } from "@angular/core";
import { CloseModalEventEmmiter } from "../models/modal.eventemitter.model";
import { Observable } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  showPopup:boolean;
  openAddPatient:boolean;
  openAddMedicalAid:boolean;
  openAddEmengencyContact:boolean;
  quees$:Observable<Array<any>>;
  constructor(private queeService:QueeService) { 
    this.quees$ = this.queeService.getQuees();
    setInterval(data=>{
      this.quees$ = this.queeService.getQuees();
    }, 10000)
  }

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
  nextQuee(){
    alert("next")
  }
}
