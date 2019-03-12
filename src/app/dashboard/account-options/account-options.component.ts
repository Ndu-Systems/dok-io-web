import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ExitModalEventEmmiter } from 'src/app/models/modal.eventemitter.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.scss']
})
export class AccountOptionsComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<
  ExitModalEventEmmiter> = new EventEmitter();
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.closeModalAction.emit({
     close: true
    });
  }

  logOff() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
