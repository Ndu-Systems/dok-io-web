import { AddPrescriptionModel } from "./../../../models/addprescription.model";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { getCurrentUser } from "src/app/shared";

@Component({
  selector: "app-add-prescription",
  templateUrl: "./add-prescription.component.html",
  styleUrls: ["./add-prescription.component.scss"]
})
export class AddPrescriptionComponent implements OnInit {
  
  @Output() closeModalAction: EventEmitter<boolean> = new EventEmitter();
  @Input() patientId;
  UserId: string = getCurrentUser();

  rForm: FormGroup;
  data: AddPrescriptionModel;
  constructor(private fb: FormBuilder) {
   
  }
  ngOnInit() {
    this.rForm = this.fb.group({
      patientId: this.patientId,
      symptoms: "",
      diagnosis: "",
      boolPreasure: "",
      pulseRate: "",
      CreateUserId: this.UserId,
      ModifyUserId: this.UserId,
      StatusId: 1,
      drugs: this.fb.array([])
    });
    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
    });  }
  closeModal() {
    this.closeModalAction.emit(true);
  }

  get formDrugs() {
    return this.rForm.get("drugs") as FormArray;
  }
  addDrug(){
    const drug = this.fb.group({
      medicationId: '',   // this will be name, then change it ti Id on send
      unit: '',
      dosage: '',
    });

    this.formDrugs.push(drug);
  }
  deleteDrug(i){
    this.formDrugs.removeAt(i);
  }
  sendToDb(data){
    data.myId = "5555555";
    console.log(data);
    
  }
}

/*
    patientId: string;
    symptoms: string;
    diagnosis: string;
    boolPreasure: string;
    pulseRate: string;
    CreateUserId: string;
    ModifyUserId: string;
    StatusId: string;
    drugs: Drug[];


    medicationId: string;
    unit: string;
    dosage: string;
*/
