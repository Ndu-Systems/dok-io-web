import { CURRENT_USER } from './../../shared/config';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  rForm : FormGroup;
 
  email: string = "";
  password: string = "";

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
  }

  ngOnInit() {    
  }
 get formValues() {
   return this.rForm.controls;
 }

  Login(){
    
    this.loginService.loginUser(this.formValues.email.value, this.formValues.password.value)
        .subscribe(response => {
          if(response){
            this.router.navigate(['/dashboard']);
            localStorage.setItem(CURRENT_USER, "fe47252d-34cc-11e9-8a5d-f48e38e878a3")
          }
        });
     

  }
}
