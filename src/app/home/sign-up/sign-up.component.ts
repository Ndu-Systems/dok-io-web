import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ExitModalEventEmmiter } from "src/app/models";
import { LoginService } from "../login";
import { Router } from "@angular/router";
import { CURRENT_USER } from "src/app/shared";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
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
    private router: Router
  ) {
    this.rForm = fb.group({
      FirstName: [null,Validators.required],
      Surname: [null,Validators.required],
      Title: [null,Validators.required],
      Gender: [null,Validators.required],
      PhoneNumber: [null,Validators.required],
      IdNumber: [null,Validators.required],
      CreateUserId: ['SYS',Validators.required],
      ModifyUserId: ['SYS',Validators.required],
      Email: [null,Validators.required],
      Password: [null,Validators.required],
      PasswordConfirm: [null,Validators.required],
      StatusId: [4,Validators.required],
    });



  }

  ngOnInit() {}
  get formValues() {
    return this.rForm.controls;
  }

  SignUp(data) {
    console.log(data);
  }

  closeModal() {
    this.closeModalAction.emit({
      close: true
    });
  }
}
