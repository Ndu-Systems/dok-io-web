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
}
