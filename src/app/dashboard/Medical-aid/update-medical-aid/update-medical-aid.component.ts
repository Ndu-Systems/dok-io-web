import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CloseModalEventEmmiter } from 'src/app/models/modal.eventemitter.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MedicalaidService } from 'src/app/services/medicalaid.service';
import { LAST_INSERT_ID, getCurrentUser } from 'src/app/shared';


@Component({
  selector: 'app-update-medical-aid',
  templateUrl: './update-medical-aid.component.html',
  styleUrls: ['./update-medical-aid.component.scss']
})
export class UpdateMedicalAidComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<
  CloseModalEventEmmiter
> = new EventEmitter();

rForm: FormGroup;
UserId: string = getCurrentUser();


constructor(private fb: FormBuilder, private medicalaidService: MedicalaidService) {
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
    if(!data.HasMedicalAid){
    }
  });
}

  ngOnInit() {
  }
  closeModal(): void {
    this.closeModalAction.emit({
      closeAll: true,
      openAddEmengencyContact: false,
      openAddMedicalAid: false,
      openAddPatient: false
    });
  }

}
