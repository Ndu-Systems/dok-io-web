import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-prescription",
  templateUrl: "./add-prescription.component.html",
  styleUrls: ["./add-prescription.component.scss"]
})
export class AddPrescriptionComponent implements OnInit {
  @Output() closeModalAction: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
  closeModal() {
    this.closeModalAction.emit(true);
  }
  
  ngOnInit() {}
}
