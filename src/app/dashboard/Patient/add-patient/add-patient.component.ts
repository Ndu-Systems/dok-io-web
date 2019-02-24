import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; //l-f
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
@Output() closeModalAction:EventEmitter<boolean> = new EventEmitter();

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
message: string = '';

/*
Form ends here
*/
Age="0";

  constructor(private fb:FormBuilder, private http:HttpClient) {
    this.rForm = fb.group({
      'FirstName':[null, Validators.required],
      'Surname':[null, Validators.required],
      'IdNumber':[null, Validators.required],
      'DOB':[null, Validators.required],
      'Gender':[null, Validators.required],
      'Email':[null, Validators.required],
      'Cellphone':[null, Validators.required],
      'AddressLine1':[null, Validators.required],
      'City':[null, Validators.required],
      'PostCode':[null, Validators.required],
      'cell':[null,Validators.required],
      'Age':[null],
      'Province':[null],
      'message':[null,Validators.compose([
        Validators.required,
        Validators.minLength(15)
      ])],
    })
   }

  ngOnInit() {
  }
  closeModal(){
this.closeModalAction.emit(false);
  }
}
