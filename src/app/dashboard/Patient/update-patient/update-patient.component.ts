import { Patient } from 'src/app/models/patient.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; //l-f
import { PatientService } from 'src/app/services';
import { getCurrentUser } from 'src/app/shared';
import { CloseModalEventEmmiter } from 'src/app/models/modal.eventemitter.model';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientComponent implements OnInit {
  UserId: string = getCurrentUser();

@Input() patient:Patient;
@Output() closeModalAction: EventEmitter<
CloseModalEventEmmiter
> = new EventEmitter();
rForm: FormGroup;

constructor(private fb: FormBuilder, private patientService: PatientService) {

}
  ngOnInit() {
    this.rForm = this.fb.group({
      PatientId: [this.patient.PatientId, Validators.required],
      FirstName: [this.patient.FirstName, Validators.required],
      Surname: [this.patient.Surname, Validators.required],
      IdNumber: [this.patient.IdNumber, Validators.required],
      DOB: [this.patient.DOB, Validators.required],
      Gender: [this.patient.Gender, Validators.required],
      Email: [this.patient.Email, Validators.required],
      Cellphone: [this.patient.Cellphone, Validators.required],
      AddressLine1: [this.patient.AddressLine1, Validators.required],
      City: [this.patient.City, Validators.required],
      PostCode: [this.patient.PostCode, Validators.required],
      CreateUserId: [this.UserId],
      StatusId: [this.patient.StatusId],
      Province: [this.patient.Province]
    });
  
    this.rForm.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
  closeModal():void {
    this.closeModalAction.emit({
      closeAll: true,
      openAddEmengencyContact: false,
      openAddMedicalAid: false,
      openAddPatient: false
    });
  }
  update(data:Patient){
    this.patientService.updatePatient(data).subscribe(response => {
      if (response !== null) {
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

}
