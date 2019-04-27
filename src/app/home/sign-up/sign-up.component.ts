import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExitModalEventEmmiter } from 'src/app/models';
import { LoginService } from '../login';
import { Router } from '@angular/router';
import { CURRENT_USER } from 'src/app/shared';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  rForm: FormGroup;
  @Output() closeModalAction: EventEmitter<
  ExitModalEventEmmiter> = new EventEmitter();
  email = 'doc@mail.com';
  password = 'pass';
  error;

  constructor(private fb: FormBuilder,
        private loginService: LoginService,
        private router: Router) {
    this.rForm = fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      password: [null, Validators.required],

    });

    localStorage.clear();
  }

  ngOnInit() {
  }
 get formValues() {
   return this.rForm.controls;
 }

  Login(){
    this.loginService.loginUser(this.formValues.email.value, this.formValues.password.value)
        .subscribe(response => {
          if(response.UserId){
            localStorage.setItem(CURRENT_USER, response.UserId);
            this.router.navigate(['/dashboard']);
          }
          else{
            this.error = response;
          }
        });

  }

  closeModal() {
    this.closeModalAction.emit({
     close: true
    });
  }

}
