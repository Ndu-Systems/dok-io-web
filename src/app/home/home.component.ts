import { Component, OnInit } from '@angular/core';
import { ExitModalEventEmmiter } from '../models/modal.eventemitter.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showModal: boolean=true;
  toggleMobileMenu: boolean;
  rForm: FormGroup;

  email = '';
  cellphone = '';
  name = '';

  constructor(
    private fb: FormBuilder
  ) {
    this.rForm = this.fb.group({
      name: [null, Validators.required],
      cellphone: [null,
      Validators.compose([Validators.required,  Validators.minLength(10)])],
      email : [null, Validators.required]
    });

    localStorage.clear();
  }

  ngOnInit() {}

  showLoginModal(){
    this.showModal = true;
  }
  toggleNavMobile(){
    this.toggleMobileMenu = !this.toggleMobileMenu;
  }

  closeModal(event: ExitModalEventEmmiter) {
    if (event.close) {
      this.showModal = false;
    }
  }
}
