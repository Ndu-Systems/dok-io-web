import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/home/login';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.component.html',
  styleUrls: ['./practices.component.scss']
})
export class PracticesComponent implements OnInit {

  practices$:Observable<any>;
  user:any;
  showAddPractice: boolean;
  constructor(private loginService:LoginService,) { 
    this.loginService.currentUser.subscribe(u => this.user = u);
    this.practices$ = this.loginService.getUserByParentId(this.user.UserId);
  }

  ngOnInit() {

  }
  showModal(){
    this.showAddPractice= true;
  }
  closeModal(e: boolean) {
    this.showAddPractice = e;
    this.practices$ = this.loginService.getUserByParentId(this.user.UserId);
  }
}
