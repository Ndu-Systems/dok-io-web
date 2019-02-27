import { CloseModalEventEmmiter } from "./../../../models/modal.eventemitter.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; //l-f
import { PatientService } from "src/app/services";
import { LAST_INSERT_ID ,getCurrentUser} from "src/app/shared";

@Component({
  selector: "app-add-patient",
  templateUrl: "./add-patient.component.html",
  styleUrls: ["./add-patient.component.scss"]
})
export class AddPatientComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<
    CloseModalEventEmmiter
  > = new EventEmitter();

  /*
Form begin here
*/
  rForm: FormGroup;

  FirstName: string;
  Surname: string;
  IdNumber: string;
  DOB: string;
  Gender: string;
  Email: string;
  Cellphone: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  City: string;
  PostCode: string;
  CreateUserId: string;
  ModifyUserId: string;
  StatusId: number;
  Province: number;
  //validation
  message: string = "";

  /*
Form ends here
*/
  Age: number;
  UserId: string = getCurrentUser();

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.rForm = fb.group({
      FirstName: [null, Validators.required],
      Surname: [null, Validators.required],
      IdNumber: [null, Validators.required],
      DOB: [null, Validators.required],
      Gender: [null, Validators.required],
      Email: [null, Validators.required],
      Cellphone: [null, Validators.required],
      AddressLine1: [null, Validators.required],
      City: [null, Validators.required],
      PostCode: [null, Validators.required],
      CreateUserId: [this.UserId],
      StatusId: [1],
      Age: [this.Age],
      Province: [null]
    });

    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
      if (data.DOB) this.calculateAge(data.DOB);
    });
  }

  ngOnInit() {}
  closeModal() {
    this.closeModalAction.emit({
      closeAll: true,
      openAddEmengencyContact: false,
      openAddMedicalAid: false,
      openAddPatient: false
    });
  }
  register(data) {
    this.patientService.addPatient(data).subscribe(response => {
      if (response.PatientId !== null) {
      localStorage.setItem(LAST_INSERT_ID, response.PatientId)
        this.closeModalAction.emit({
          closeAll: false,
          openAddEmengencyContact: false,
          openAddMedicalAid: true,
          openAddPatient: false
        });
      } else {
        alert(`Error: ${response}`);
      }
    });
  }
  calculateAge(date) {
    var ageDifMs = Date.now() - new Date(date).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    this.Age = Math.abs(ageDate.getUTCFullYear() - 1970);
    //  this.rForm.controls['Age'].setValue(this.Age);
    // this.rForm.get('Age').setValue(this.Age)
  }
}
