import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CloseModalEventEmmiter } from 'src/app/models/modal.eventemitter.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-medical-aid',
  templateUrl: './add-medical-aid.component.html',
  styleUrls: ['./add-medical-aid.component.scss']
})
export class AddMedicalAidComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<
  CloseModalEventEmmiter
> = new EventEmitter();

/*
Form begin here
*/
rForm: FormGroup;

//validation
message: string = "";

/*
Form ends here
*/
Age: number;
UserId: string = "fe47252d-34cc-11e9-8a5d-f48e38e878a3";

  PatientId: string;
  MedicalaidName: string;
  MedicalaidType: string;
  MemberShipNumber: string;
  PrimaryMember: string;
  PrimaryMemberId: string;
  CreateUserId: string;
  StatusId: number;
constructor(private fb: FormBuilder, private patientService: any) {
  this.rForm = fb.group({
    PatientId: [null, Validators.required],
    MedicalaidName: [null, Validators.required],
    MedicalaidType: [null, Validators.required],
    MemberShipNumber: [null, Validators.required],
    PrimaryMemberId: [null, Validators.required],
    CreateUserId: [this.UserId, Validators.required],
    StatusId: [null, Validators.required],
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
    if (response === true) {
      alert(response);
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
