import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  showAddPatient= false;
  constructor() { }

  ngOnInit() {}
  showAddPatientModal() {
    this.showAddPatient = true;
  }
  closeModal(e){
      this.showAddPatient = false;
  }
}
