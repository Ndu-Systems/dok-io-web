import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../bread-crumb/bread-crumb.model';
import { PrescriptionService, PatientService } from 'src/app/services';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.scss']
})
export class ViewPrescriptionComponent implements OnInit {
  items: Array<BreadCrumb> = [];
  patientId: string;
  constructor(
    private prescriptionService: PrescriptionService,
    private patientService: PatientService
  ) {
    this.items = [
      {
        name: 'PERSONAL DETAILS',
        url: `/dashboard/patient/${this.patientId}`,
        active: false
      },
      {
        name: 'PRESCRIPTIONS',
        url: `/dashboard/patient-prescription/${this.patientId}`,
        active: true
      },
      {
        name: ' APPOINTMENTS',
        url: '/dashboard',
        active: false
      }
    ];
  }

  ngOnInit() {
  }
  
}
