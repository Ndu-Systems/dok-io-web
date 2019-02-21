import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/shared';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

url = API_URL;

constructor(private httpClient: HttpClient) { }

public loginUser(Email: string, Password: string): Observable<any>{

    let data = {
      email: Email,
      password: Password
    };

    let reqheaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(this.url + '/api/login/login-user.php', JSON.stringify(data), { headers: reqheaders});

}
}
