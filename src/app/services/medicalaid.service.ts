import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class MedicalaidService {

  constructor(private http: HttpClient) {}
  addMedicalaid(data): Observable<any> {
    return this.http.post<any>(`${API_URL}/api/medicalaid/add-medicalaid.php`,data);
  }

}
