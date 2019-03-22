import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CloseModalEventEmmiter } from "src/app/models/modal.eventemitter.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MedicalaidService } from "src/app/services/medicalaid.service";
import { LAST_INSERT_ID, getCurrentUser, SELECT_PATIENT } from "src/app/shared";
import { MedicalAid } from "src/app/models";

@Component({
  selector: "app-update-medical-aid",
  templateUrl: "./update-medical-aid.component.html",
  styleUrls: ["./update-medical-aid.component.scss"]
})
export class UpdateMedicalAidComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<
    CloseModalEventEmmiter
  > = new EventEmitter();

  rForm: FormGroup;
  UserId: string = getCurrentUser();
  PatientId: string;
  medicalAidInfo: MedicalAid;

  constructor(
    private fb: FormBuilder,
    private medicalaidService: MedicalaidService
  ) {
    this.initMedicalInfo();
    this.formInit()
  }

  ngOnInit() {
    this.PatientId = localStorage.getItem(SELECT_PATIENT);
    this.medicalaidService.getPatientMedicalAid(this.PatientId).subscribe(r => {
      console.log("Medicat iad info", r);
      if (r.length) {
        //create new medical aid
        this.createMedicalAid();
      }
      // load the patient medical iad
      this.medicalAidInfo = r[0];
      this.formInit();
      
    });

  
  }
  formInit(){
    this.rForm = this.fb.group({
      PatientId: [localStorage.getItem(SELECT_PATIENT), Validators.required],
      HasMedicalAid: [true, Validators.required],
      MedicalaidName: [this.medicalAidInfo.MedicalaidName, Validators.required],
      MedicalaidType: [this.medicalAidInfo.MedicalaidType, Validators.required],
      MemberShipNumber: [this.medicalAidInfo.MemberShipNumber, Validators.required],
      PrimaryMember: [this.medicalAidInfo.PrimaryMember, Validators.required],
      PrimaryMemberId: [this.medicalAidInfo.PrimaryMemberId, Validators.required],
      ModifyUserId: [this.UserId, Validators.required],
      StatusId: [1, Validators.required]
    });

    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
      if (!data.HasMedicalAid) {
      }
    });
  }

  createMedicalAid(): any {
    this.initMedicalInfo();
    this.formInit();
    return true;
  }
  closeModal(): void {
    this.closeModalAction.emit({
      closeAll: true,
      openAddEmengencyContact: false,
      openAddMedicalAid: false,
      openAddPatient: false
    });
  }

  openNext() {
    this.closeModalAction.emit({
      closeAll: false,
      openAddEmengencyContact: true,
      openAddMedicalAid: false,
      openAddPatient: false
    });
  }
  updateMedicalInfo(data){
    console.log(data);
    this.medicalaidService.addMedicalaid(data).subscribe(response => {    
      if (response) {
        alert(response);
        this.closeModal()
      } else {
        alert(`Error: ${response}`);
      }
    });
    
  }

initMedicalInfo(){
  this.medicalAidInfo =  {  
    "MedicalaidId":"",
    "PatientId":"",
    "MedicalaidName":"",
    "MedicalaidType":"",
    "MemberShipNumber":"",
    "PrimaryMember":"",
    "PrimaryMemberId":"",
    "CreateDate":"",
    "CreateUserId":this.UserId,
    "ModifyDate":"",
    "StatusId":"0"
 }
}
}
