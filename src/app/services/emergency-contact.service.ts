import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../shared';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmergencyContactService {
  constructor(private http: HttpClient) {}
  addEmergencyContact(data): Observable<any> {
    return this.http.post<any>(`${API_URL}/api/contactperson/add-contactperson.php`,data);
  }

}
