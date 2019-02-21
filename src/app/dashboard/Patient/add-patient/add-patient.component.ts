import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
@Output() closeModalAction:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closeModal(){
this.closeModalAction.emit(false);
  }
}
