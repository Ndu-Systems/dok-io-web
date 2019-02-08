import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients$:Observable<Array<any>> = this.patientService.getPatients();
  constructor(private patientService:PatientService) { }

  ngOnInit() {
  }

}
