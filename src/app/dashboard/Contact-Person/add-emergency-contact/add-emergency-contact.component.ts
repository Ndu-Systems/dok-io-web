import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CloseModalEventEmmiter } from 'src/app/models/modal.eventemitter.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getCurrentUser, LAST_INSERT_ID } from 'src/app/shared';
import { EmergencyContactService } from 'src/app/services/emergency-contact.service';

@Component({
  selector: 'app-add-emergency-contact',
  templateUrl: './add-emergency-contact.component.html',
  styleUrls: ['./add-emergency-contact.component.scss']
})
export class AddEmergencyContactComponent implements OnInit {
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
UserId: string = getCurrentUser();

  PatientId: string;
  MedicalaidName: string;
  MedicalaidType: string;
  MemberShipNumber: string;
  PrimaryMember: string;
  PrimaryMemberId: string;
  CreateUserId: string;
  StatusId: number;
constructor(private fb: FormBuilder, private emergencyContactService: EmergencyContactService) {
  this.rForm = fb.group({
    PatientId: [localStorage.getItem(LAST_INSERT_ID), Validators.required],
    HasMedicalAid: [true, Validators.required],
    MedicalaidName: [null, Validators.required],
    MedicalaidType: [null, Validators.required],
    MemberShipNumber: [null, Validators.required],
    PrimaryMember: [null, Validators.required],
    PrimaryMemberId: [null, Validators.required],
    CreateUserId: [this.UserId, Validators.required],
    StatusId: [1, Validators.required],
  });

  this.rForm.valueChanges.subscribe(data => {
    console.log(data);
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
addmedicalaid(data) {
  this.emergencyContactService.addEmergencyContact(data).subscribe(response => {    
    if (response) {
      alert(response);
      this.closeModalAction.emit({
        closeAll: true,
        openAddEmengencyContact: false,
        openAddMedicalAid: false,
        openAddPatient: false
      });
    } else {
      alert(`Error: ${response}`);
    }
  });
}

}
