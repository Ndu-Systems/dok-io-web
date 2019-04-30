import { LoginService } from './../../../home/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  staff$:Observable<any>;
  user:any;
  constructor(private loginService:LoginService,) { 
    this.loginService.currentUser.subscribe(u => this.user = u);
    this.staff$ = this.loginService.getUserByParentId(this.user.UserId);
  }

  ngOnInit() {

  }

}
