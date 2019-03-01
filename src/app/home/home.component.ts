import { Component, OnInit } from '@angular/core';
import { ExitModalEventEmmiter } from '../models/modal.eventemitter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showModal: boolean;
  constructor() { }

  ngOnInit() {}

  showLoginModal(){
    this.showModal = true;
  }

  closeModal(event: ExitModalEventEmmiter) {
    if (event.close) {
      this.showModal = false;
    }
  }

  


}
