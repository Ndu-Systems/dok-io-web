import { LoginService } from './../../../home/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staff$:Observable<any>
  constructor(private loginService:LoginService) { 
    this.staff$ = this.loginService.getUserByParentId();
  }

  ngOnInit() {
  }

}
