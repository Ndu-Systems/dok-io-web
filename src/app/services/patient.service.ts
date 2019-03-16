import { API_URL } from "src/app/shared";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PatientService {
  constructor(private http: HttpClient) {}
  getPatients(): Observable<any> {
    return this.http.get<any>(`${API_URL}/api/patient/get-active-patients.php`);
  }
  getPatient(id:string): Observable<any> {
    return this.http.get<any>(`${API_URL}/api/patient/get-patient.php?PatientId=${id}`);
  }
  addPatient(data): Observable<any> {
    return this.http.post<any>(`${API_URL}/api/patient/add-patient.php`,data);
  }
  addPatientNotes(data): Observable<any> {
    return this.http.post<any>(`${API_URL}/api/notes/add-notes.php`,data);
  }
  getPatientNotes(id:string): Observable<any> {
    return this.http.get<any>(`${API_URL}/api/notes/get-notes.php?PatientId=${id}`);
  }
}
