import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  constructor(private http: HttpClient) {}

  getPatientPrescriptions(id:string): Observable<any> {
    return this.http.get<any>(`${API_URL}/api/prescription/get-patient-prescriptions.php?PatientId=${id}`);
  }

}
