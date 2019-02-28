import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services';
import { Observable } from 'rxjs';
import { BreadCrumb } from '../../bread-crumb/bread-crumb.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
p:number =1;
  items:Array<BreadCrumb> = [
    {
      name:'ACTIVE PATIENTS', url:'/dashboard', active:true
    },
    {
      name:'INCOMPLETE PATIENTS', url:'/dashboard', active:false
    }, {
      name:' ARCHIVED PATIENTS', url:'/dashboard', active:false
    }

  ];
  
  patients$:Observable<Array<any>> = this.patientService.getPatients();
  constructor(private patientService:PatientService) { }

  ngOnInit() {
  }

}

