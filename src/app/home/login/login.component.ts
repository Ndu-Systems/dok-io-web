import { SpinnerService } from './../../services/spinner.service';
import { CURRENT_USER } from "./../../shared/config";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { ExitModalEventEmmiter } from "src/app/models/modal.eventemitter.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  @Output() closeModalAction: EventEmitter<
    ExitModalEventEmmiter
  > = new EventEmitter();
  email = "doc@mail.com";
  password = "pass";
  error;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private spinnerService: SpinnerService,
  ) {
    this.rForm = fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      password: [null, Validators.required]
    });

    localStorage.clear();
  }

  ngOnInit() {}
  get formValues() {
    return this.rForm.controls;
  }

  Login() {
    this.spinnerService.showSpinner();
    this.loginService
      .loginUser(this.formValues.email.value, this.formValues.password.value)
      .subscribe(response => {
        if (response.UserId) {
          localStorage.setItem(CURRENT_USER, response.UserId);
          this.router.navigate(["/dashboard"]);
          this.spinnerService.hideSpinner();
        } else {
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
